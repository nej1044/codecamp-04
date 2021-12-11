import { useQuery, gql } from "@apollo/client";

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
  const { data } = useQuery(FETCH_USER_LOGGEDIN);

  return (
    <>
      <div>로그인에 성공하였습니다!!</div>
      <div>{data?.fetchUserLoggedIn.email}</div>
      <div>{data?.fetchUserLoggedIn.name}님 환영합니다!!</div>
      <span>{data?.fetchUserLoggedIn.picture}</span>
    </>
  );
};

export default LoginSuccessPage;
