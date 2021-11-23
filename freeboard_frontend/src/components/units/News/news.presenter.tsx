import * as S from "./news.styles";
import { getDate } from "../../../commons/libraries/utils";

const NewsUI = (props) => {
  return (
    <S.Wrapper>
      <S.NewsTitle>실시간 뉴스 TOP 20</S.NewsTitle>
      <S.Line></S.Line>
      {props.news?.map((el, idx) => (
        <S.NewsList href={el.url}>
          <S.ContentsIdx>{idx + 1}</S.ContentsIdx>
          <S.ContentsTitle>{el.title}</S.ContentsTitle>
          <S.ContentsDate>{getDate(el.updated)}</S.ContentsDate>
        </S.NewsList>
      ))}
    </S.Wrapper>
  );
};

export default NewsUI;
