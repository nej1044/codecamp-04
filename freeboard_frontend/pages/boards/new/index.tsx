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
          content="능력있는 개발자들의 모임, 디벨로펌과 함께 성장해보세요"
        />
      </Head>
      <BoardNew />
    </>
  );
};

export default BoardNewPage;
