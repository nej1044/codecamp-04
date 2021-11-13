import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
  CREATE_COMMENT,
} from "./BoardDetail.queries";
import { useState, MouseEvent, ChangeEvent } from "react";

const BoardDetail = () => {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);
  const [createBoardComment] = useMutation(CREATE_COMMENT);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");

  const date = data?.fetchBoard.createdAt.split("T")[0];

  // 주소보여주기
  function handleClickShow(event: MouseEvent<HTMLImageElement>) {
    if (event.target.previousSibling.style.display === "none") {
      event.target.previousSibling.style.display = "flex";
    } else {
      event.target.previousSibling.style.display = "none";
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

  // 댓글 쓰기
  const handleChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const createComment = async () => {
    if (!writer) {
    }
    if (!password) {
    }
    if (!contents) {
    }

    if (writer && password && contents) {
      try {
        const result = await createBoardComment({
          variables: {
            createBoardCommentInput: { writer, password, contents, rating: 4 },
            boardId: router.query.boardId,
          },
        });
        console.log(result);
        alert("댓글 등록이 완료되었습니다.");
      } catch (error: any) {
        alert(`댓글 등록에 실패했습니다. ${error.message}`);
      }
    }
  };
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
      handleChangeWriter={handleChangeWriter}
      handleChangePassword={handleChangePassword}
      handleChangeContents={handleChangeContents}
      createComment={createComment}
    />
  );
};

export default BoardDetail;
