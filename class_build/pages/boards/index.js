import Head from "next/head";

const BoardsPage = () => {
  return (
    <>
      <Head>
        <meta property="og:title" content="디벨로펌 커뮤니티" />
        <meta property="og:url" content="http://develofirm.site" />
        <meta
          property="og:image"
          content="https://cdn.pixabay.com/photo/2021/12/12/20/26/flow-6866055__480.jpg"
        />
        <meta
          property="og:description"
          content="능력있는 개발자들의 모임, 디벨로펌과 함께 성장해보세요"
        />
      </Head>
      <div>안녕하세요 게시판입니다.</div>
    </>
  );
};

export default BoardsPage;
