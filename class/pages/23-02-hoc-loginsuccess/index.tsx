import { useQuery, gql } from "@apollo/client";
import { IQuery } from "../../src/commons/types/generated/types";
import { withAuth } from "../../src/components/commons/hocs/withAuth";

const FETCH_USER_LOGGEDIN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      emails
      name
      picture
    }
  }
`;
const LoginSuccessPage = (props) => {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGEDIN);

  return (
    <>
      <div>로그인이 완료되었습니다.</div>
      <div>{data?.fetchUserLoggedIn.name}님 환영합니다.</div>
    </>
  );
};

export default withAuth(LoginSuccessPage);
