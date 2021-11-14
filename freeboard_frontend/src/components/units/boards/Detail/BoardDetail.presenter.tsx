import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./Board.Detail.styles";
import { IBoardDetailUIProps } from "./BoardDetail.types";

const BoardDetailUI = (props: IBoardDetailUIProps) => {
  return (
    <>
      <S.Wrapper>
        <S.DetailSection>
          <S.DetailHeader>
            <S.Title>{props.first?.fetchBoard.title}</S.Title>
            <S.UserInfo>
              <S.UserProfile>
                <img src="/images/detail/ProfileImg.png" />
                <S.ProfileText>
                  <S.UserName>{props.first?.fetchBoard.writer}</S.UserName>
                  <S.UserDate>Date: {props.date}</S.UserDate>
                </S.ProfileText>
              </S.UserProfile>
              <S.UserMore>
                <a
                  href={props.first?.fetchBoard.youtubeUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src="/images/detail/sns.png" />
                </a>
                <S.Address>
                  {" "}
                  서울특별시 영등포구 양산로 200
                  <br />
                  (영등포동5가, 영등포시장역) 영등포 타임스퀘어 2 층{" "}
                </S.Address>
                <img
                  onClick={props.addressShow}
                  src="/images/detail/zipcode.png"
                />
              </S.UserMore>
            </S.UserInfo>
          </S.DetailHeader>
          <S.DetailBody>
            <S.DetailBtnSection>
              <S.DetailBtn onClick={props.handleEdit}>수정</S.DetailBtn>
              <S.DetailBtn onClick={props.handleDeleteBoard}>삭제</S.DetailBtn>
            </S.DetailBtnSection>
            <S.BodyHeader>
              <S.BodyImg src="/images/detail/contentsImg.jpeg" />
              <span>{props.first?.fetchBoard.contents}</span>
            </S.BodyHeader>
            <S.DetailMoodlet>
              <S.DetailLike onClick={props.upLike}>
                <img src="/images/detail/Like.png" />
                <S.LikeNum>{props.first?.fetchBoard.likeCount}</S.LikeNum>
              </S.DetailLike>
              <S.DetailLike onClick={props.downlike}>
                <img src="/images/detail/UnLike.png" />
                <S.UnLikeNum>
                  {props.first?.fetchBoard.dislikeCount}
                </S.UnLikeNum>
              </S.DetailLike>
            </S.DetailMoodlet>
          </S.DetailBody>
          <S.ListBtn onClick={props.handleList}>⇽</S.ListBtn>
        </S.DetailSection>
        <S.CommentSection>
          <S.CommentWrapper>
            <S.CommentHeader>댓글</S.CommentHeader>
            <S.CommentInputsSection>
              <S.UserInputWrapper>
                <S.UserInput
                  type="text"
                  placeholder="작성자"
                  onChange={props.handleChangeWriter}
                  value={props.writer}
                ></S.UserInput>
                <S.UserInput
                  type="password"
                  placeholder="비밀번호"
                  onChange={props.handleChangePassword}
                  value={props.password}
                ></S.UserInput>
                <div className="stars"></div>
              </S.UserInputWrapper>
              <S.TextAreaSection>
                <S.UserTextarea
                  placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                  onChange={props.handleChangeContents}
                  value={props.contents}
                ></S.UserTextarea>
                <S.InputFooter>
                  <S.LettersNumber>{props.contents.length}/100</S.LettersNumber>
                  <S.CommentAdmin onClick={props.createComment}>
                    댓글등록
                  </S.CommentAdmin>
                </S.InputFooter>
              </S.TextAreaSection>
            </S.CommentInputsSection>
            <S.CommentBody>
              {props.second?.fetchBoardComments.map((el: any) => (
                <S.Comment key={el?._id}>
                  <S.CommentImg src="/images/detail/ProfileImg.png" />
                  <S.CommentInfo>
                    <div>
                      <S.CommentUser>{el?.writer}</S.CommentUser>
                      <S.CommentDate>{getDate(el.createdAt)}</S.CommentDate>
                    </div>
                    <S.CommentFunc>
                      <S.FuncItem id={el?._id} onClick={props.updateComment}>
                        수정
                      </S.FuncItem>
                      <S.FuncItem id={el?._id} onClick={props.deleteComment}>
                        삭제
                      </S.FuncItem>
                    </S.CommentFunc>
                  </S.CommentInfo>
                  <S.CommentContents>{el?.contents}</S.CommentContents>
                </S.Comment>
              ))}
            </S.CommentBody>
          </S.CommentWrapper>
        </S.CommentSection>
      </S.Wrapper>
    </>
  );
};

export default BoardDetailUI;
