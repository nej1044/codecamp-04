import { Header } from "antd/lib/layout/layout";
import * as S from "./home.styles";
import { useScrollFadeIn } from "../../../commons/libraries/utils";

const HomeUI = () => {
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
              이번 주 가장 핫한 디벨로퍼 🔥
            </S.DeveloperTitle>
            <div class="developer-container" {...useScrollFadeIn("up", 1, 0)}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </S.DeveloperSection>
          <S.PostingSection>
            <S.SectionTitle {...useScrollFadeIn("up", 1, 0)}>
              이번 주 읽어보면 도움이 될 만한 포스팅! 📌
            </S.SectionTitle>
            <S.PostingContainer {...useScrollFadeIn("up", 1, 0)}>
              <S.Posting></S.Posting>
              <S.Posting></S.Posting>
              <S.Posting></S.Posting>
              <S.Posting></S.Posting>
            </S.PostingContainer>
          </S.PostingSection>
        </S.HomeBody>
      </S.Wrapper>
    </>
  );
};

export default HomeUI;
