import HeaderUI from "./header.presenter";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { LOGIN_USER } from "./header.queries";
import { useMutation } from "@apollo/client";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [loginUser] = useMutation(LOGIN_USER);
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

  const onClickLogin = () => {
    try {
      loginUser({ variables: { ...input } });
      alert(`로그인하였습니다.`);
      setIsOpen(!isOpen);
    } catch (error: any) {
      alert(`로그인에 실패했습니다 ${error.message}`);
    }
  };
  return (
    <HeaderUI
      moveHome={moveHome}
      onClickLogin={onClickLogin}
      openLogin={openLogin}
      isOpen={isOpen}
      handleChangeInput={hanldeChangeInput}
    />
  );
};

export default Header;
