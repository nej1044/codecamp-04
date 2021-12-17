import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
  IMutationToggleUseditemPickArgs,
} from "../../../commons/types/generated/types";
import CartUI from "./cart.presenter";
import { BUY_USEDITEM, TOGGLE_USEDITEM_PICK } from "./cart.queries";

const Cart = () => {
  const router = useRouter();
  const [toggleUseditemPick] = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(TOGGLE_USEDITEM_PICK);
  const [buyUseditem] = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(BUY_USEDITEM);
  const [shoppingCart, setShoppingCart] = useState([]);

  const getDetail = (id: String) => () => {
    router.push(`market/${id}`);
  };

  const getBaskets = () => {
    setShoppingCart(JSON.parse(localStorage.getItem("baskets") || "[]"));
  };

  const onClickDelete = (id: String) => () => {
    const basket = JSON.parse(localStorage.getItem("baskets") || "[]");

    const newBasket = basket.filter((el: any) => el._id !== id);
    localStorage.setItem("baskets", JSON.stringify(newBasket));
    alert("상품이 삭제되었습니다.");
    getBaskets();
  };

  const buyItem = (id: string) => async () => {
    await buyUseditem({
      variables: { useritemId: id },
    });
    const basket = JSON.parse(localStorage.getItem("baskets") || "[]");

    const newBasket = basket.filter((el: any) => el._id !== id);
    localStorage.setItem("baskets", JSON.stringify(newBasket));
    alert("프로젝트를 구매하셨습니다.");
    getBaskets();
  };

  useEffect(() => {
    getBaskets();
  }, []);

  const togglePick = (id: string) => async () => {
    await toggleUseditemPick({
      variables: { useditemId: id },
    });
    alert("관심상품에 담았습니다.");
  };

  return (
    <CartUI
      shoppingCart={shoppingCart}
      onClickDelete={onClickDelete}
      getDetail={getDetail}
      buyItem={buyItem}
      togglePick={togglePick}
    />
  );
};

export default Cart;
