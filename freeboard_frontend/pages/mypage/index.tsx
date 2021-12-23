import { withAuth } from "../../src/components/commons/hocs/withAuth";
import MyPage from "../../src/components/units/myPage/coin/myPage.container";

const MyPagePage = () => {
  return <MyPage />;
};

export default withAuth(MyPagePage);
