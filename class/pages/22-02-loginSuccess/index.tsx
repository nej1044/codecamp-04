import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { IQuery } from "../../src/commons/types/generated/types";

const FETCH_USER_LOGGEDIN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;
const LoginSuccessPage = () => {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGEDIN);

  return (
    <>
      <div>로그인이 완료되었습니다.</div>
      <div>{data?.fetchUserLoggedIn.name}님 환영합니다.</div>
    </>
  );
};

export default LoginSuccessPage;
