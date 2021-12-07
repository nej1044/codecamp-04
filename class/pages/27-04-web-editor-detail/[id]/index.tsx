import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Dompurify from "dompurify";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`;
const WebEditorDetailPage = () => {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id },
  });

  return (
    <>
      <div>
        <div style={{ color: "red" }}>{data?.fetchBoard.writer}</div>
        {/* {process.browser ? (
          <div style={{ color: "green" }}>{data?.fetchBoard.title}</div>
        ) : (
          <div style={{ color: "green" }}></div>
        )} */}
        <div style={{ color: "blue" }}>내용: 반갑습니다</div>
        {process.browser ? (
          <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(String(data?.fetchBoard.contents)),
            }}
          />
        ) : (
          <div style={{ color: "green" }}></div>
        )}
      </div>
    </>
  );
};

export default WebEditorDetailPage;
