import HeaderUI from "./header.presenter";
import { useRouter } from "next/router";
import { ChangeEvent, useContext, useState, useEffect } from "react";
import { LOGIN_USER, FETCH_USER_LOGGEDIN, LOGOUT_USER } from "./header.queries";
import { useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import { GlobalContext } from "../../../../../pages/_app";

const Header = () => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const { accessToken, setAccessToken, setIsOpen, isOpen } =
    useContext<any>(GlobalContext);
  const router = useRouter();
  const [logoutUser] = useMutation(LOGOUT_USER);
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGEDIN);
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
      // localStorage.setItem(
      //   "accessToken",
      //   result.data?.loginUser.accessToken || ""
      // );
      localStorage.setItem("isLoggedIn", "true");
      setAccessToken(result.data?.loginUser.accessToken);
      alert(`로그인하였습니다.`);
      setIsOpen(false);
    } catch (error: any) {
      alert(`로그인에 실패했습니다 ${error.message}`);
    }
  };

  const moveSignup = () => {
    router.push("/signup");
    setIsOpen(false);
  };

  const logout = async () => {
    await logoutUser;
    localStorage.removeItem("isLoggesIn");
    setAccessToken("");
    alert("로그아웃하였습니다.");
  };

  const moveCart = () => {
    router.push("/cart");
  };

  useEffect(() => {
    setShoppingCart(JSON.parse(localStorage.getItem("baskets") || "[]"));
  }, []);

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
      moveCart={moveCart}
      shoppingCart={shoppingCart}
      accessToken={accessToken}
    />
  );
};

export default Header;
