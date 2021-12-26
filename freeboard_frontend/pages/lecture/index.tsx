import Lecture from "../../src/components/units/lecture/lecture.container";
import Head from "next/head";

const LecturePage = () => {
  <Head>
    <meta property="og:title" content="디벨로펌 추천강의" />
    <meta property="og:url" content="http://develofirm.site/lecture" />
    <meta
      property="og:image"
      content="https://media.vlpt.us/images/nej1044/post/77855b0e-080d-44fd-95ec-b1656d6caead/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-12-26%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%209.56.00.png"
    />
    <meta
      property="og:description"
      content="시작부터 실전까지, 좋은 강의를 다른 사람과 공유하고 함께 들어요"
    />
  </Head>;
  return <Lecture />;
};

export default LecturePage;
