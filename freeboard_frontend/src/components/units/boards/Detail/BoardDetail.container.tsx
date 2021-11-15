import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import { useState, MouseEvent, ChangeEvent } from "react";

const BoardDetail = () => {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  // 주소보여주기
  function handleClickShow(event: MouseEvent<HTMLImageElement>) {
    const adressBox = event.target.previouSibling;
    if (adressBox.style.display === "none") {
      adressBox.style.display = "flex";
    } else {
      adressBox.style.display = "none";
    }
  }

  // 게시글 삭제
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

  // 좋아요
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

  // 싫어요
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

  // 목록으로
  function handleList() {
    router.push(`/boards`);
  }

  // 수정하기
  function handleEdit() {
    router.push(`${router.query.boardId}/edit`);
  }

  return (
    <BoardDetailUI
      upLike={upLike}
      downlike={downlike}
      handleEdit={handleEdit}
      addressShow={handleClickShow}
      data={data}
      handleDeleteBoard={handleDeleteBoard}
      handleList={handleList}
    />
  );
};

export default BoardDetail;
