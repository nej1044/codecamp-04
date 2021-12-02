import MarketList from "../../src/components/units/markets/list/MarketList.container";
import { withAuth } from "../../src/components/commons/hocs/withAuth";

const MarketListPage = () => {
  return (
    <>
      <MarketList />
    </>
  );
};

export default withAuth(MarketListPage);
