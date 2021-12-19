import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IBoard,
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
  IMutationDeleteUseditemArgs,
  IMutationToggleUseditemPickArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import MarketDetailUI from "./marketDetail.presenter";
import {
  FETCH_USEDITEM,
  DELETE_USEDITEM,
  TOGGLE_USEDITEM_PICK,
  BUY_USEDITEM,
  FETCH_USER,
} from "./marketDetail.queries";

const MarketDetail = () => {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchUseditem">>(FETCH_USEDITEM, {
    variables: { useditemId: router.query.useditemId },
  });
  const { data: fetchUser } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER);
  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USEDITEM);
  const [toggleUseditemPick] = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(TOGGLE_USEDITEM_PICK);
  const [buyUseditem] = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(BUY_USEDITEM);

  const handleEdit = () => {
    router.push(`/market/${router.query.useditemId}/edit`);
  };

  const handleDelete = async () => {
    try {
      await deleteUseditem({
        variables: { useditemId: String(router.query.useditemId) },
      });
      alert("게시물을 삭제했습니다.");
      router.push(`/market`);
    } catch (error: any) {
      alert(`게시물 삭제에 실패했습니다 ${error.message}`);
    }
  };

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

  const togglePick = async () => {
    const result = await toggleUseditemPick({
      variables: { useditemId: String(router.query.useditemId) },
      optimisticResponse: {
        toggleUseditemPick: data?.fetchUseditem.pickedCount || 0,
      },
      update(cache, { data }) {
        const prevData: Pick<IQuery, "fetchUseditem"> | null = cache.readQuery({
          query: FETCH_USEDITEM,
          variables: { useditemId: String(router.query.useditemId) },
        });
        const prevFetch = prevData || { fetchUseditem: {} };
        cache.writeQuery({
          query: FETCH_USEDITEM,
          variables: { useditemId: String(router.query.useditemId) },
          data: {
            fetchUseditem: {
              ...prevFetch.fetchUseditem,
              _id: String(router.query.useditemId),
              __typename: "Useditem",
              pickedCount: data?.toggleUseditemPick,
            },
          },
        });
      },
    });
    console.log(result);
  };

  const buyItem = (id: string) => async () => {
    await buyUseditem({
      variables: { useritemId: id },
    });
    alert("프로젝트를 구매하셨습니다.");
  };

  return (
    <MarketDetailUI
      data={data}
      fetchUser={fetchUser}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      onClickBasket={onClickBasket}
      togglePick={togglePick}
      buyItem={buyItem}
    />
  );
};

export default MarketDetail;
