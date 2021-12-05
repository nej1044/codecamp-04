import { useState, useEffect } from "react";
import MarketWriteUI from "./marketWrite.presetner";
import { FormValues } from "./marketWrite.types";
import {
  CREATE_USEDITEM,
  UPDATE_USEDITEM,
  FETCH_USEDITEM,
} from "./marketWrite.queries";
import { useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";

const MarketWrite = (props) => {
  const router = useRouter();
  const [imgUrl, setImgUrl] = useState<string[]>([]);
  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USEDITEM);
  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USEDITEM);
  const { data } = useQuery<Pick<IQuery, "fetchUseditem">>(FETCH_USEDITEM, {
    variables: { useditemId: router.query.useditemId },
  });

  // 이미지
  const onChangeFiles = (idx: number, url: string) => {
    const images = [...imgUrl];

    if (images[idx]) {
      images[idx] = url;
    } else {
      images.push(url);
    }

    setImgUrl([...images]);
  };

  // 상품등록
  const onClickCreate = async (data: FormValues) => {
    console.log(data);
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: [data.tags],
            images: imgUrl,
          },
        },
      });
      console.log(result);
      router.push(`/market/${result.data?.createUseditem._id}`);
    } catch (error) {
      alert(`프로젝트 등록에 실패했습니다.`);
    }
  };

  // 상품수정
  useEffect(() => {
    const imgContainer = data?.fetchUseditem.images;
    imgContainer && setImgUrl([...imgContainer]);
  }, [data]);

  const handleEditMarket = async (data: FormValues) => {
    console.log(data);
    try {
      const result = await updateUseditem({
        variables: {
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: [data.tags],
            images: imgUrl,
          },
          useditemId: String(router.query.useditemId),
        },
      });
      console.log(result);
      router.push(`/market/${router.query.useditemId}`);
      alert("게시물 수정이 완료되었습니다.");
    } catch (error: any) {
      alert(`게시물 수정에 실패했습니다. ${error.message}`);
    }
  };

  const onClickDeletes = (idx: number) => {
    const images = [...imgUrl];
    images.splice(idx, 1);
    setImgUrl(images);
  };
  return (
    <MarketWriteUI
      onChangeFiles={onChangeFiles}
      onClickDeletes={onClickDeletes}
      imgUrl={imgUrl}
      onClickCreate={onClickCreate}
      handleEditMarket={handleEditMarket}
      isEdit={props.isEdit}
      data={data}
    />
  );
};

export default MarketWrite;
