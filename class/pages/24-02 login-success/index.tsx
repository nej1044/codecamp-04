import { useContext } from "react";
import { withAuth } from "../../src/components/commons/hocs/withAuth";
import { GlobalContext } from "../_app";

const LoginSuccessPage = () => {
  const { userInfo } = useContext(GlobalContext);
  return (
    <>
      <div>로그인이 완료되었습니다.</div>
      <div>{userInfo.name}님 환영합니다.</div>
    </>
  );
};

export default withAuth(LoginSuccessPage);
