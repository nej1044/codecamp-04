import * as S from "./home.styles";
import { IHomeUI } from "./home.types";

const HomeUI = (props: IHomeUI) => {
  return (
    <>
      <S.Wrapper>
        <S.ProjectSection>
          <S.SectionTitle>디벨로펌에서 가장 인기있어요!</S.SectionTitle>
          <S.ProjectContainer>
            {props.fetchUseditemBest?.fetchUseditemsOfTheBest.map((el: any) => (
              <S.Project key={el._id} onClick={props.getProject(el._id)}>
                  <S.ContentsHeader>
                    <S.ProjectSeller>{el.seller.name}</S.ProjectSeller>
                    <S.ProjectName>{el.name}</S.ProjectName>
                  </S.ContentsHeader>
                <S.ProjectImg src="/images/programmer.png" />
              </S.Project>
            ))}
          </S.ProjectContainer>
        </S.ProjectSection>
      </S.Wrapper>
    </>
  );
};

export default HomeUI;
