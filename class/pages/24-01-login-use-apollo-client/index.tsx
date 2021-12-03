import { ChangeEvent, useContext, useState } from "react";
import { gql, useApolloClient, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";
import { GlobalContext } from "../_app";
import { useRouter } from "next/router";
export const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGEDIN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

const LoginPage = () => {
  const router = useRouter();
  const { setAccessToken, setUserInfo } = useContext<any>(GlobalContext);
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  // client는 axios다!
  const client = useApolloClient();

  const handleChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const onClickLogin = async () => {
    try {
      const result = await loginUser({ variables: { ...inputs } });
      const accessToken = result.data?.loginUser.accessToken || "";
      localStorage.setItem("accessToken", accessToken); // temp
      setAccessToken(accessToken); // setAccessToken 필요(글로벌 스테이트에)
      alert(`로그인하였습니다.`);
      // const result = await axios.get(koreanjason/posts/1) 이러한 방식으로 원하는 곳에서 useQeury 필요
      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGEDIN,
        context: {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        },
      });
      setUserInfo(resultUserInfo.data?.fetchUserLoggeing);
      // const result = fetchUserLoggedIn()
      // setUserinfo(result.data?.loginUser.accessToken || ""); //
      // 로그인 성공된 페이지로 이동
      router.push("/23-05-loginSuccess");
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
