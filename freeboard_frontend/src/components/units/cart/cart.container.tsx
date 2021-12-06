import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CartUI from "./cart.presenter";

const Cart = () => {
  const router = useRouter();
  const [shoppingCart, setShoppingCart] = useState([]);

  const getDetail = (id) => () => {
    router.push(`market/${id}`);
  };

  const onClickDelete = (id) => () => {
    const basket = JSON.parse(localStorage.getItem("baskets") || "[]");

    const newBasket = basket.filter((el) => el._id !== id);
    localStorage.setItem("baskets", JSON.stringify(newBasket));
    alert("상품이 삭제되었습니다.");
  };

  useEffect(() => {
    setShoppingCart(JSON.parse(localStorage.getItem("baskets") || "[]"));
  }, [onClickDelete]);

  return (
    <CartUI
      shoppingCart={shoppingCart}
      onClickDelete={onClickDelete}
      getDetail={getDetail}
    />
  );
};

export default Cart;
