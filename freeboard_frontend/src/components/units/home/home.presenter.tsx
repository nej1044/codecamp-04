import * as S from "./home.styles";
import { IHomeUI } from "./home.types";
import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../commons/libraries/utils";
import { HeartFilled } from "@ant-design/icons";

const HomeUI = (props: IHomeUI) => {
  return (
    <>
      <S.Wrapper>
        <S.Section>
          <S.SectionTitle>커뮤니티 인기글을 둘러보세요!</S.SectionTitle>
          <div className="_community_">
            {props.data?.fetchBoardsOfTheBest.map((el) => (
              <S.Board key={uuidv4()}>
                <div style={{ width: "70%" }}>
                  <span className="_title_">{el.title}</span>
                  <span className="_like_">
                    <HeartFilled
                      style={{
                        marginRight: "2px",
                        fontSize: "10px",
                        color: "red",
                      }}
                    />
                    {el.likeCount}
                  </span>
                </div>
                <div>{`${el?.writer} · ${getDate(el.createdAt)}`}</div>
              </S.Board>
            ))}
          </div>
        </S.Section>
        <S.Section style={{ paddingBottom: "80px" }}>
          <S.SectionTitle>오픈 마켓에서 가장 인기있어요!</S.SectionTitle>
          <S.Article>
            {props.fetchUseditemBest?.fetchUseditemsOfTheBest.map((el: any) => (
              <S.Project key={uuidv4()} onClick={props.getProject(el._id)}>
                <S.ProjectImg src="/images/programmer.png" />
                <S.ContentsHeader>
                  <S.ProjectSeller>{el.seller.name}</S.ProjectSeller>
                  <S.ProjectName>{el.name}</S.ProjectName>
                </S.ContentsHeader>
              </S.Project>
            ))}
          </S.Article>
        </S.Section>
      </S.Wrapper>
    </>
  );
};

export default HomeUI;
