import BoardDetail from "../../../src/components/units/boards/detail/BoardDetail.container";
import CommentWrite from "../../../src/components/units/boardComments/Comment.container";
import Head from "next/head";
import { gql, request } from "graphql-request";

interface IBoardDetailPage {
  fetchBoard: {
    _id: string;
    title: string;
    images: string;
  };
}

export default function BoardDetailPage(props: IBoardDetailPage) {
  return (
    <>
      <Head>
        <meta property="og:title" content={props.fetchBoard.title} />
        <meta
          property="og:url"
          content={`http://develofirm.site/market/${props.fetchBoard._id}`}
        />
        <meta
          property="og:image"
          content={`https://storage.googleapis.com/${props.fetchBoard.images}`}
        />
        <meta
          property="og:description"
          content="능력있는 개발자들의 모임, 디벨로펌"
        />
      </Head>
      <BoardDetail />
      <CommentWrite />
    </>
  );
}

const FETCH_BOARD = gql`
  query fetchBoard($fetchBoard: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      title
      images
    }
  }
`;

export const getServerSideProps = async (context: any) => {
  const result = await request(
    "https://backend04.codebootcamp.co.kr/graphql",
    FETCH_BOARD,
    { boardId: context.query.boardId }
  );
  return {
    props: {
      fetchBoard: {
        _id: result.fetchBoard._id,
        title: result.fetchBoard.title,
        images: result.fetchBoard.images[0],
      },
    },
  };
};
