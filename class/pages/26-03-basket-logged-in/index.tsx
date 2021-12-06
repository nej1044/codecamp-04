import { useEffect, useState } from "react";
import { IBoard } from "../../src/commons/types/generated/types";

const BasketLoggedInPage = () => {
  const [basketItems, setBasketItems] = useState<IBoard[]>([]);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItems(baskets);
  }, []);
  return (
    <>
      <h1>비회원으로 담은 나만의 장바구니</h1>
      {basketItems.map((el, idx) => (
        <div key={el._id}>
          <span>{idx + 1}</span>
          <span>{el.writer}</span>
          <span>{el.title}</span>
        </div>
      ))}
    </>
  );
};

export default BasketLoggedInPage;
