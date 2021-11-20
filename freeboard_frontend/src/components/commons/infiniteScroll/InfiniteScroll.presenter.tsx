import InfiniteScroll from "react-infinite-scroller";
import * as S from "./InfiniteScroll.styles";
import { getDate } from "../../../commons/libraries/utils";

const InfiniteScrollUI = (props) => {
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.fetchBoardComments.map((el: any) => (
        <S.Comment key={el?._id}>
          <S.CommentImg src="/images/detail/ProfileImg.png" />
          <S.CommentInfo>
            <div>
              <S.CommentUser>{el?.writer}</S.CommentUser>
              <S.CommentDate>{getDate(el.createdAt)}</S.CommentDate>
              <S.CommentRate
                disabled={props.disabled}
                value={el.rating}
                onChange={props.changeEditRating}
              />
            </div>
            <S.CommentFunc>
              <S.FuncItem id={el?.contents} onClick={props.openEdit}>
                수정
              </S.FuncItem>
              <S.FuncItem id={el?._id} onClick={props.deleteComment}>
                삭제
              </S.FuncItem>
            </S.CommentFunc>
          </S.CommentInfo>
          <S.EditTextArea>
            <S.UserTextarea
              maxLength={100}
              onChange={props.handleChangeEdit}
              defaultValue={el?.contents}
            ></S.UserTextarea>
            <S.InputFooter>
              <S.LettersNumber>{props.editContents.length}/100</S.LettersNumber>
              <S.CommentAdmin id={el?._id} onClick={props.updateComment}>
                댓글수정
              </S.CommentAdmin>
            </S.InputFooter>
          </S.EditTextArea>
          <S.CommentContents>{el?.contents}</S.CommentContents>
        </S.Comment>
      ))}
    </InfiniteScroll>
  );
};

export default InfiniteScrollUI;
