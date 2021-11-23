import * as S from "./news.styles";
import { getDate } from "../../../commons/libraries/utils";
import { INewsUI } from "./new.types";

const NewsUI = (props: INewsUI) => {
  return (
    <S.Wrapper>
      <S.NewsTitle>실시간 뉴스 TOP 20</S.NewsTitle>
      <S.Line></S.Line>
      {props.news?.map((el: any, idx: any) => (
        <S.NewsList href={el.url} key={el.uri}>
          <S.ContentsIdx>{idx + 1}</S.ContentsIdx>
          <S.ContentsTitle>{el.title}</S.ContentsTitle>
          <S.ContentsDate>{getDate(el.updated)}</S.ContentsDate>
        </S.NewsList>
      ))}
    </S.Wrapper>
  );
};

export default NewsUI;
