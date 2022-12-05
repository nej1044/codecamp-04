import HeaderUI from "./header.presenter";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { LOGIN_USER, FETCH_USER_LOGGEDIN, LOGOUT_USER } from "./header.queries";
import { useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import { useRecoilState } from "recoil";
import { accessTokenState, isOpenState } from "../../../../commons/store";
import { Modal } from "antd";

const Header = () => {
  const router = useRouter();
  const [logoutUser] = useMutation(LOGOUT_USER);
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGEDIN);
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [input, setInput] = useState({
    password: "",
    email: "",
  });

  const moveHome = () => {
    router.push("/");
  };

  const openLogin = () => {
    setIsOpen(!isOpen);
  };

  const hanldeChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const onClickLogin = async () => {
    try {
      const result = await loginUser({ variables: { ...input } });
      const accessToken = result.data?.loginUser.accessToken;
      setAccessToken(accessToken || "");
      Modal.success({
        content: "로그인 하였습니다.",
      });
      setIsOpen(false);
    } catch (error: any) {
      Modal.error({
        content: `로그인에 실패했습니다 ${error.message}`,
      });
    }
  };

  const moveSignup = () => {
    router.push("/signup");
    setIsOpen(false);
  };

  const logout = async () => {
    await logoutUser;
    setAccessToken("");
    Modal.success({
      content: "로그아웃하였습니다.",
    });
  };

  return (
    <HeaderUI
      moveHome={moveHome}
      onClickLogin={onClickLogin}
      openLogin={openLogin}
      isOpen={isOpen}
      handleChangeInput={hanldeChangeInput}
      moveSignup={moveSignup}
      data={data}
      logout={logout}
      accessToken={accessToken}
    />
  );
};

export default Header;
