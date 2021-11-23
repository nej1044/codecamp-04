import axios from "axios";
import { useState, useEffect } from "react";
import NewsUI from "./news.presenter";

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
  });
  return (
    <>
      <NewsUI news={news} />
    </>
  );
};

export default News;
