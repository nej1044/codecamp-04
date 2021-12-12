import MarketCommentList from "../../../src/components/units/markets/comments/list/marketCommentList.container";
import MarketComment from "../../../src/components/units/markets/comments/write/marketComment.container";
import MarketDetail from "../../../src/components/units/markets/detail/marketDetail.container";

const MarketDetailPage = () => {
  return (
    <>
      <MarketDetail />
      <MarketComment />
      <MarketCommentList />
    </>
  );
};

export default MarketDetailPage;
