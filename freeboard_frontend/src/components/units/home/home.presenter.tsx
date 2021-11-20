import { Header } from "antd/lib/layout/layout";
import * as S from "./home.styles";
import { useScrollFadeIn } from "../../../commons/libraries/utils";
import { getDate } from "../../../commons/libraries/utils";

const HomeUI = (props) => {
  return (
    <>
      <S.Wrapper>
        <S.HomeHeader>
          <S.HeaderTitle {...useScrollFadeIn("up", 1, 0)}>
            능력있는 프리랜서 개발자들의 모임
          </S.HeaderTitle>
          <S.HeaderSubTitle {...useScrollFadeIn("up", 1, 0)}>
            디벨로펌
          </S.HeaderSubTitle>
        </S.HomeHeader>
        <S.HomeBody>
          <S.ProjectSection>
            <S.SectionTitle {...useScrollFadeIn("up", 1, 0)}>
              디벨로펌만의 새로운 프로젝트 OPEN 📣
            </S.SectionTitle>
            <S.ProjectContainer {...useScrollFadeIn("up", 1, 0)}>
              <S.Project></S.Project>
              <S.Project></S.Project>
              <S.Project></S.Project>
            </S.ProjectContainer>
          </S.ProjectSection>
          <S.DeveloperSection>
            <S.DeveloperTitle {...useScrollFadeIn("up", 1, 0)}>
              이번 주 가장 HOT🔥 한 디벨로퍼
            </S.DeveloperTitle>
            <S.DeveloperContainer {...useScrollFadeIn("up", 1, 0)}>
              {props.data?.fetchBoardsOfTheBest.map((el) => (
                <S.Developer key={el._id}>
                  <S.ProfileImg src="/images/detail/ProfileImg.png" />
                  {el.writer}
                </S.Developer>
              ))}
            </S.DeveloperContainer>
          </S.DeveloperSection>
          <S.PostingSection>
            <S.SectionTitle {...useScrollFadeIn("up", 1, 0)}>
              이번 주 읽어보면 도움이 될 만한 포스팅! 📌
            </S.SectionTitle>
            <S.PostingContainer {...useScrollFadeIn("up", 1, 0)}>
              {props.data?.fetchBoardsOfTheBest.map((el) => (
                <S.Posting key={el._id}>
                  <div>
                    <S.ProfileImg src="/images/detail/ProfileImg.png" />
                    <S.PostingWriter>{el.writer}</S.PostingWriter>
                  </div>
                  <S.PostingContents>
                    <S.PostingDetail>
                      <S.PostingDate>{getDate(el.createdAt)}</S.PostingDate>
                      <S.PostingTitle>{el.title}</S.PostingTitle>
                      <span>{el.contents}</span>
                    </S.PostingDetail>
                    <S.PostingLike>
                      <S.LikeImg src="/images/detail/Like.png" />
                      <span>{el.likeCount}</span>
                    </S.PostingLike>
                  </S.PostingContents>
                </S.Posting>
              ))}
            </S.PostingContainer>
          </S.PostingSection>
        </S.HomeBody>
      </S.Wrapper>
    </>
  );
};

export default HomeUI;
