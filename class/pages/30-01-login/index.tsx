import { ChangeEvent, useContext, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserExampleArgs,
} from "../../src/commons/types/generated/types";
import { GlobalContext } from "../_app";
import { useRouter } from "next/router";
export const LOGIN_USER = gql`
  mutation loginUserExample($password: String!, $email: String!) {
    loginUserExample(password: $password, email: $email) {
      accessToken
    }
  }
`;

const LoginPage = () => {
  const router = useRouter();
  const { setAccessToken } = useContext<any>(GlobalContext);
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUserExample">,
    IMutationLoginUserExampleArgs
  >(LOGIN_USER);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const onClickLogin = async () => {
    try {
      const result = await loginUser({ variables: { ...inputs } });
      // localStorage.setItem(
      //   "accessToken",
      //   result.data?.loginUserExample.accessToken || ""
      // );
      localStorage.setItem("isLoggedIn", "true");
      setAccessToken(result.data?.loginUserExample.accessToken);
      alert(`로그인하였습니다.`);
      console.log(result);
      router.push("/30-02-login-success");
    } catch (error: any) {
      alert(`로그인에 실패했습니다 ${error.message}`);
    }
  };

  return (
    <>
      이메일: <input type="text" onChange={handleChangeInputs} name="email" />
      <br />
      비밀번호:
      <input type="password" onChange={handleChangeInputs} name="password" />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
};

export default LoginPage;
