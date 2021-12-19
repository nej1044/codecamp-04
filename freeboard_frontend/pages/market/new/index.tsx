import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import MarketWrite from "../../../src/components/units/markets/write/marketWrite.container";

const MarketNewPage = () => {
  return (
    <>
      <MarketWrite />
    </>
  );
};

export default withAuth(MarketNewPage);
