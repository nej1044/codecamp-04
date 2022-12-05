import BoardNew from "../../../src/components/units/boards/new/BoardNew.container";
import Head from "next/head";

const BoardNewPage = () => {
  return (
    <>
      <Head>
        <meta property="og:title" content="디벨로펌 커뮤니티" />
        <meta property="og:url" content="http://develofirm.site/boards" />
        <meta
          property="og:image"
          content="https://cdn.pixabay.com/photo/2020/12/18/19/27/team-5842784_1280.jpg"
        />
        <meta
          property="og:description"
          content="개발 회사에서 만든 실무 코딩 부트캠프: 코드캠프"
        />
      </Head>
      <BoardNew />
    </>
  );
};

export default BoardNewPage;
