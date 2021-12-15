import { useState, useEffect, ChangeEvent } from "react";
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
import { Address } from "react-daum-postcode";

const MarketWrite = () => {
  const router = useRouter();
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
  const [imgUrl, setImgUrl] = useState<string[]>([]);
  const [, setHashtag] = useState<string | "">("");
  const [hashArr, setHashArr] = useState<string[] | []>([]);
  const [isOpenAddress, setIsOpenAddress] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("");
  const [zipcode, setZipcode] = useState<string>("");
  const [addressDetail, setAddressDetail] = useState<string>("");

  const onChangeFiles = (idx: number, url: string) => {
    const images = [...imgUrl];

    if (images[idx]) {
      images[idx] = url;
    } else {
      images.push(url);
    }

    setImgUrl([...images]);
  };

  const onClickDeletes = (idx: number) => {
    const images = [...imgUrl];
    images.splice(idx, 1);
    setImgUrl(images);
  };

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

  const onToggleModal = () => {
    setIsOpenAddress((prev) => !prev);
  };

  const handleComplete = (data: Address) => {
    setIsOpenAddress((prev) => !prev);
    setAddress(data.address);
    setZipcode(data.zonecode);
  };

  const handleChangeDetailAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

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
            useditemAddress: {
              zipcode,
              address,
              addressDetail,
            },
          },
        },
      });
      router.push(`/market/${result.data?.createUseditem._id}`);
    } catch (error) {
      alert(`프로젝트 등록에 실패했습니다.`);
    }
  };

  useEffect(() => {
    const imgContainer = data?.fetchUseditem.images;
    imgContainer && setImgUrl([...imgContainer]);

    const hashContainer = data?.fetchUseditem.tags;
    hashContainer && setHashArr([...hashContainer]);
  }, [data]);

  const handleEditMarket = async (editData: FormValues) => {
    try {
      await updateUseditem({
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
      router.push(`/market/${router.query.useditemId}`);
      alert("게시물 수정이 완료되었습니다.");
    } catch (error: any) {
      alert(`게시물 수정에 실패했습니다. ${error.message}`);
    }
  };

  console.log(data);
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
      isOpenAddress={isOpenAddress}
      zipcode={zipcode}
      onToggleModal={onToggleModal}
      handleComplete={handleComplete}
      address={address}
      changedDetailAddress={handleChangeDetailAddress}
    />
  );
};

export default MarketWrite;
