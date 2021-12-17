import axios from "axios";
import { useState, useEffect } from "react";
import * as S from "./news.styles";
import { getDate } from "../../../commons/libraries/utils";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const result: any = await axios.get(
        "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=HF3xGn5ewiEcvTPDFAymGgBfSBvitNLv"
      );
      setNews(result.data.results);
    };
    fetchNews();
  }, []);
  return (
    <S.Wrapper>
      <S.NewsWrap>
        <S.NewsTitle>실시간 뉴스 TOP 20</S.NewsTitle>
        <S.Line></S.Line>
        {news?.map((el: any, idx: any) => (
          <S.NewsList href={el.url} key={el.uri}>
            <S.ContentsIdx>{idx + 1}</S.ContentsIdx>
            <S.ContentsTitle>{el.title}</S.ContentsTitle>
            <S.ContentsDate>{getDate(el.updated)}</S.ContentsDate>
          </S.NewsList>
        ))}
      </S.NewsWrap>
    </S.Wrapper>
  );
};

export default News;
