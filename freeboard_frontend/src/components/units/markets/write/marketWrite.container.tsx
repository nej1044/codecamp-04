import { useState } from "react";
import MarketWriteUI from "./marketWrite.presetner";
import { FormValues } from "./marketWrite.types";
import { CREATE_USEDITEM } from "./marketWrite.queries";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";

const MarketWrite = () => {
  const router = useRouter();
  const [imgUrl, setImgUrl] = useState<string[]>([]);
  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USEDITEM);

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

  // useEffect(() => {
  //   const imgContainer = data?.fetchBoard.images;
  //   imgContainer && setImgUrl([...imgContainer]);
  // }, [data]);

  // if (imgUrl) {
  //   myVariables.updateBoardInput.images = imgUrl;
  // }

  const onClickDeletes = (idx: number) => {
    const images = [...imgUrl];
    images.splice(idx, 1);
    setImgUrl(images);
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

  return (
    <MarketWriteUI
      onChangeFiles={onChangeFiles}
      onClickDeletes={onClickDeletes}
      // isEdit={props.isEdit}
      imgUrl={imgUrl}
      onClickCreate={onClickCreate}
    />
  );
};

export default MarketWrite;
