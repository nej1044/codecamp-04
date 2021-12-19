import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      likeCount
    }
  }
`;
const FETCH_LIKE = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

const OptimisticUIPage = () => {
  const [fetchLike] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(FETCH_LIKE);
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: "61b816aa717be5002baa70a8" } }
  );
  const onClicklike = () => {
    fetchLike({
      variables: { boardId: "61b816aa717be5002baa70a8" },
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "61b816aa717be5002baa70a8" },
          data: {
            fetchBoard: {
              _id: "61b816aa717be5002baa70a8",
              _typename: "Board",
              likeCount: data?.likeBoard,
            },
          },
        });
      },
    });
    // refetch({ boardId: "61b816aa717be5002baa70a8" });
  };

  return (
    <>
      <div>좋아요 갯수: {data?.fetchBoard.likeCount}</div>
      <button onClick={onClicklike}>좋아요</button>
    </>
  );
};

export default OptimisticUIPage;
