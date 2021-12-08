import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import MyPageUI from "./myPage.presenter";
import { CREATE_POINT, FETCH_USER } from "./myPage.queries";

const MyPage = () => {
  const { data } = useQuery(FETCH_USER);
  const [createPoint] = useMutation(CREATE_POINT);
  const [coin, setCoin] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangeCoin = (event) => {
    setCoin(event.target.value);
  };

  const onClickPayment = () => {
    setOpen(false);
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // imp49910675
    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: "로켓코인충전",
        amount: coin,
        buyer_email: data?.fetchUserLoggedIn.email,
        buyer_name: data?.fetchUserLoggedIn.name,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "localhost:3000/28-01-payment",
      },
      (rsp) => {
        if (rsp.success) {
          console.log(rsp);
          createPoint({
            variables: { impUid: rsp.imp_uid },
            refetchQueries: [{ query: FETCH_USER }],
          });
        }
      }
    );
  };

  return (
    <MyPageUI
      handleOpen={handleOpen}
      handleClose={handleClose}
      open={open}
      onClickPayment={onClickPayment}
      handleChangeCoin={handleChangeCoin}
      data={data}
    />
  );
};

export default MyPage;
