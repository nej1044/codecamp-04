import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { SyntheticEvent } from "react";
import { IBoard, IQuery } from "../../../../commons/types/generated/types";
import MarketDetailUI from "./marketDetail.presenter";
import {
  FETCH_USEDITEM,
  DELETE_USEDITEM,
  TOGGLE_USEDITEM_PICK,
} from "./marketDetail.queries";

const MarketDetail = () => {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchUseditem">>(FETCH_USEDITEM, {
    variables: { useditemId: router.query.useditemId },
  });
  const [deleteUseditem] = useMutation(DELETE_USEDITEM);
  const [toggleUseditemPick] = useMutation(TOGGLE_USEDITEM_PICK);

  // 수정으로 이동
  const handleEdit = () => {
    router.push(`/market/${router.query.useditemId}/edit`);
  };

  // 게시글 삭제
  const handleDelete = async () => {
    try {
      await deleteUseditem({
        variables: { useditemId: router.query.useditemId },
      });
      alert("게시물을 삭제했습니다.");
      router.push(`/market`);
    } catch (error: any) {
      alert(`게시물 삭제에 실패했습니다 ${error.message}`);
    }
  };

  // 장바구니에 담기
  const onClickBasket = (data: IBoard) => () => {
    const basket = JSON.parse(localStorage.getItem("baskets") || "[]") || [];

    let isExists = false;
    basket.forEach((basketEl: IBoard) => {
      if (data._id === basketEl._id) isExists = true;
    });
    if (isExists) {
      alert("이미 장바구니에 담았습니다.");
      return;
    }

    const { __typename, ...newEl } = data;
    basket.push(newEl);
    localStorage.setItem("baskets", JSON.stringify(basket));
    alert("장바구니에 담았습니다.");
  };

  // 찜하기
  const togglePick = async () => {
    await toggleUseditemPick({
      variables: { useditemId: router.query.useditemId },
      refetchQueries: [
        {
          query: FETCH_USEDITEM,
          variables: { useditemId: router.query.useditemId },
        },
      ],
    });
  };

  const onError = (event: SyntheticEvent<HTMLImageElement>) => {
    (event.target as any).src =
      "https://reviewpro.co.kr/wp-content/uploads/2020/06/vipul-jha-a4X1cdC1QAc-unsplash-scaled.jpg";
  };
  return (
    <MarketDetailUI
      data={data}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      onClickBasket={onClickBasket}
      togglePick={togglePick}
      onError={onError}
    />
  );
};

export default MarketDetail;
