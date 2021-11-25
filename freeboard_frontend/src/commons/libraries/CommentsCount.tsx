import { gql, useQuery } from "@apollo/client";

export const FECTH_COMMENTS = gql`
  query fetchBoardComments($page: Int, $boardId: ID!) {
    fetchBoardComments(page: $page, boardId: $boardId) {
      _id
      writer
      contents
      rating
      createdAt
    }
  }
`;

export const CommentsCount = ({ boardId }: { boardId: string }) => {
  const { data: fetchComments } = useQuery(FECTH_COMMENTS, {
    variables: { boardId },
  });

  const commentsCount = fetchComments?.fetchBoardComments.length;
  if (commentsCount === 10) return <div>{commentsCount + "+"}</div>;

  return <div>{commentsCount}</div>;
};
