import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import { MouseEvent } from "react";

const BoardDetail = () => {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  console.log(data);
  const date = data?.fetchBoard.createdAt.split("T")[0];

  function handleClickShow(event: MouseEvent<HTMLImageElement>) {
    if (event.target.previousSibling.style.display === "none") {
      event.target.previousSibling.style.display = "flex";
    } else {
      event.target.previousSibling.style.display = "none";
    }
  }

  async function handleDeleteBoard() {
    try {
      const result = await deleteBoard({
        variables: { boardId: router.query.boardId },
      });
      console.log(result);
      alert("게시물을 삭제했습니다.");
      router.push(`/boards`);
    } catch (error: any) {
      alert(`게시물 삭제에 실패했습니다 ${error.message}`);
    }
  }

  const upLike = async () => {
    try {
      await likeBoard({
        variables: { boardId: router.query.boardId },
        refetchQueries: [
          { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
        ],
      });
    } catch (error: any) {
      alert(error.message);
    }
  };

  const downlike = async () => {
    try {
      await dislikeBoard({
        variables: { boardId: router.query.boardId },
        refetchQueries: [
          { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
        ],
      });
    } catch (error: any) {
      alert(error.message);
    }
  };

  function handleList() {
    router.push(`/boards`);
  }

  function handleEdit() {
    router.push(`${router.query.boardId}/edit`);
  }

  return (
    <BoardDetailUI
      upLike={upLike}
      downlike={downlike}
      handleEdit={handleEdit}
      date={date}
      addressShow={handleClickShow}
      data={data}
      handleDeleteBoard={handleDeleteBoard}
      handleList={handleList}
    />
  );
};

export default BoardDetail;
