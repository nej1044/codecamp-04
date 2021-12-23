import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
  IMutationResetUserPasswordArgs,
  IMutationUpdateUserArgs,
  IQuery,
  IQueryFetchPointTransactionsArgs,
} from "../../../../commons/types/generated/types";
import MyPageUI from "./myPage.presenter";
import {
  CREATE_POINT,
  FETCH_USER,
  FETCH_POINT,
  UPDATE_USER,
  RESET_PASSWORD,
} from "./myPage.queries";

declare const window: typeof globalThis & {
  IMP: any;
};

const MyPage = () => {
  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER);
  const { data: fetchPoint, fetchMore } = useQuery<
    Pick<IQuery, "fetchPointTransactions">,
    IQueryFetchPointTransactionsArgs
  >(FETCH_POINT);
  const [createPoint] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT);
  const [updateUser] = useMutation<
    Pick<IMutation, "updateUser">,
    IMutationUpdateUserArgs
  >(UPDATE_USER);
  const [resetUserPassword] = useMutation<
    Pick<IMutation, "resetUserPassword">,
    IMutationResetUserPasswordArgs
  >(RESET_PASSWORD);
  const router = useRouter();
  const [isEdit, setisEdit] = useState(false);
  const [name, setName] = useState("");
  const [coin, setCoin] = useState(0);
  const [pw, setPw] = useState("");
  const [rePw, setRePw] = useState("");
  const [open, setOpen] = useState(false);
  const [passwordEdit, setPasswordEdit] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const passwordOpen = () => setPasswordEdit(true);
  const passwordClose = () => setPasswordEdit(false);

  const handleChangeCoin = (event: ChangeEvent<HTMLInputElement>) => {
    setCoin(Number(event.target.value));
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
      (rsp: any) => {
        if (rsp.success) {
          createPoint({
            variables: { impUid: rsp.imp_uid },
            refetchQueries: [{ query: FETCH_USER }],
          });
        }
      }
    );
  };

  const getDetail = (id: String) => () => {
    router.push(`market/${id}`);
  };

  const onLoadMore = () => {
    if (!fetchPoint) return;

    fetchMore({
      variables: {
        page: Math.ceil(fetchPoint?.fetchPointTransactions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchPointTransactions)
          return { fetchPointTransactions: [...prev.fetchPointTransactions] };
        return {
          fetchPointTransactions: [
            ...prev.fetchPointTransactions,
            ...fetchMoreResult.fetchPointTransactions,
          ],
        };
      },
    });
  };

  const openUpdateUser = () => {
    setisEdit(true);
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const updateName = async () => {
    try {
      await updateUser({
        variables: {
          updateUserInput: { name: name || data?.fetchUserLoggedIn.name },
        },
      });
      alert("별병이 변경되었습니다.");
      setisEdit(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onChangePw = (event: ChangeEvent<HTMLInputElement>) => {
    setPw(event.target.value);
  };

  const onChangeRePw = (event: ChangeEvent<HTMLInputElement>) => {
    setRePw(event.target.value);
  };

  const resetPassword = () => {
    if (pw !== rePw) alert("비밀번호를 다시 확인해주세요");
    if (pw === rePw) {
      try {
        resetUserPassword({ variables: { password: pw } });
        alert("비밀번호가 변경되었습니다.");
        setPasswordEdit(false);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  return (
    <MyPageUI
      handleOpen={handleOpen}
      handleClose={handleClose}
      open={open}
      onClickPayment={onClickPayment}
      handleChangeCoin={handleChangeCoin}
      data={data}
      fetchPoint={fetchPoint}
      getDetail={getDetail}
      onLoadMore={onLoadMore}
      openUpdateUser={openUpdateUser}
      isEdit={isEdit}
      onChangeName={onChangeName}
      updateName={updateName}
      passwordEdit={passwordEdit}
      passwordClose={passwordClose}
      passwordOpen={passwordOpen}
      onChangePw={onChangePw}
      onChangeRePw={onChangeRePw}
      resetPassword={resetPassword}
    />
  );
};

export default MyPage;
