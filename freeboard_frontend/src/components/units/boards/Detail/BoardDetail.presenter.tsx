import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./Board.Detail.styles";
import { IBoardDetailUIProps } from "./BoardDetail.types";

const BoardDetailUI = (props: IBoardDetailUIProps) => {
  return (
    <>
      <S.Wrapper>
        <S.DetailSection>
          <S.DetailHeader>
            <S.Title>{props.data?.fetchBoard.title}</S.Title>
            <S.UserInfo>
              <S.UserProfile>
                <img src="/images/detail/ProfileImg.png" />
                <S.ProfileText>
                  <S.UserName>{props.data?.fetchBoard.writer}</S.UserName>
                  <S.UserDate>
                    Date: {getDate(props.data?.fetchBoard.createdAt)}
                  </S.UserDate>
                </S.ProfileText>
              </S.UserProfile>
              <S.UserMore>
                <a
                  href={props.data?.fetchBoard.youtubeUrl}
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
              <span>{props.data?.fetchBoard.contents}</span>
            </S.BodyHeader>
            <S.DetailMoodlet>
              <S.DetailLike onClick={props.upLike}>
                <img src="/images/detail/Like.png" />
                <S.LikeNum>{props.data?.fetchBoard.likeCount}</S.LikeNum>
              </S.DetailLike>
              <S.DetailLike onClick={props.downlike}>
                <img src="/images/detail/UnLike.png" />
                <S.UnLikeNum>{props.data?.fetchBoard.dislikeCount}</S.UnLikeNum>
              </S.DetailLike>
            </S.DetailMoodlet>
          </S.DetailBody>
          <S.ListBtn onClick={props.handleList}>⇽</S.ListBtn>
        </S.DetailSection>
      </S.Wrapper>
    </>
  );
};

export default BoardDetailUI;
