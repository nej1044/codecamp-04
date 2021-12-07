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

const MarketWrite = () => {
  const router = useRouter();
  const [imgUrl, setImgUrl] = useState<string[]>([]);
  const [, setHashtag] = useState<string | "">("");
  const [hashArr, setHashArr] = useState<string[] | []>([]);
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

  // 해시태그
  const onKeyUp = (event: any) => {
    if (event.keyCode === 32 && event.target.value !== " ") {
      setHashArr([...hashArr, "#" + event.target.value]);
      setHashtag("");
      event.target.value = "";
    }
  };

  const deleteHash = (idx: number) => () => {
    hashArr.splice(idx, 1);
    console.log(hashArr);
    setHashArr([...hashArr]);
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
            tags: hashArr,
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

    const hashContainer = data?.fetchUseditem.tags;
    hashContainer && setHashArr([...hashContainer]);
  }, [data]);

  const handleEditMarket = async (editData: FormValues) => {
    try {
      const result = await updateUseditem({
        variables: {
          updateUseditemInput: {
            name: editData.name ? editData.name : data?.fetchUseditem.name,
            remarks: editData.remarks
              ? editData.remarks
              : data?.fetchUseditem.remarks,
            contents: editData.contents
              ? editData.contents
              : data?.fetchUseditem.contents,
            price: editData.price
              ? Number(editData.price)
              : Number(data?.fetchUseditem.price),
            tags: hashArr,
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
      data={data}
      onKeyUp={onKeyUp}
      hashArr={hashArr}
      deleteHash={deleteHash}
    />
  );
};

export default MarketWrite;
