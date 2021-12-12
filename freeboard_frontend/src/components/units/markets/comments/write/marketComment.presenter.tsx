import * as S from "./marketComment.styles";
import { IMarketCommentUI } from "./marketComment.types";

const MarketCommentUI = (props: IMarketCommentUI) => {
  return (
    <S.CommentSection>
      <S.CommentWrapper>
        {!props.isEdit && <S.CommentHeader>Q & A</S.CommentHeader>}
        <S.CommentInputsSection>
          <S.TextAreaSection>
            <span>
              {props.data ? props.data?.fetchUserLoggedIn.name : "알수없음"}
            </span>
            {!props.isEdit && (
              <S.UserTextarea
                placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                onChange={props.handleChangeInput}
                value={props.contents}
              ></S.UserTextarea>
            )}
            {props.isEdit && (
              <S.UserTextarea
                placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                onChange={props.handleChangeInput}
                defaultValue={props.el?.contents || ""}
              ></S.UserTextarea>
            )}
            <S.InputFooter>
              <S.CommentAdmin
                onClick={
                  props.isEdit ? props.updateQuestion : props.createQuestion
                }
              >
                {props.isEdit ? "댓글수정" : "댓글등록"}
              </S.CommentAdmin>
            </S.InputFooter>
          </S.TextAreaSection>
        </S.CommentInputsSection>
      </S.CommentWrapper>
    </S.CommentSection>
  );
};

export default MarketCommentUI;
