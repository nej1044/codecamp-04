import InfiniteScroll from "react-infinite-scroller";
import { IMarketCommentListUI } from "./marketComment.List.types";
import MarketCommentListUIItem from "./marketCommentList.presenterItem";
import * as S from "./marketCommetnList.styles";

const MarketCommentListUI = (props: IMarketCommentListUI) => {
  return (
    <>
      <S.CommentBody>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
        >
          {props.data?.fetchUseditemQuestions.map((el: any) => (
            <>
              <MarketCommentListUIItem el={el} key={el?._id} />
            </>
          ))}
        </InfiniteScroll>
      </S.CommentBody>
    </>
  );
};

export default MarketCommentListUI;
