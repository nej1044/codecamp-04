import * as S from "./MarketComment.styles";

const MarketCommentUI = (props) => {
  return (
    <S.CommentSection>
      <S.CommentWrapper>
        <S.CommentHeader>Q & A</S.CommentHeader>
        <S.CommentInputsSection>
          <S.TextAreaSection>
            <span>
              {props.data ? props.data?.fetchUserLoggedIn.name : "알수없음"}
            </span>
            <S.UserTextarea
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              onChange={props.handleChangeInput}
            ></S.UserTextarea>
            <S.InputFooter>
              <S.CommentAdmin onClick={props.createQuestion}>
                댓글등록
              </S.CommentAdmin>
            </S.InputFooter>
          </S.TextAreaSection>
        </S.CommentInputsSection>
        <S.CommentBody></S.CommentBody>
      </S.CommentWrapper>
    </S.CommentSection>
  );
};

export default MarketCommentUI;
