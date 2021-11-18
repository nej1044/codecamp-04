import {
  CREATE_COMMENT,
  FECTH_COMMENTS,
  DELETE_COMMENT,
  UPDATE_COMMENT,
} from "./CommentWrite.queries";
import { useState, MouseEvent, ChangeEvent, SetStateAction } from "react";
import { useQuery, useMutation } from "@apollo/client";
import CommentWriteUI from "./CommentWrite.presenter";
import { useRouter } from "next/router";
import { IMyVariables, IMyInputVariables } from "./CommentWrite.types";

const CommentWrite = () => {
  const router = useRouter();
  const [createBoardComment] = useMutation(CREATE_COMMENT);
  const [deleteBoardComment] = useMutation(DELETE_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_COMMENT);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [editContents, setEditContents] = useState("");
  const [rating, setRating] = useState(3);
  const [editRating, setEditRating] = useState(3);
  const [disabled, setDisabled] = useState(true);
  const { data, refetch } = useQuery(FECTH_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  // 댓글 쓰기
  const handleChangeRating = (rating: SetStateAction<number>) => {
    setRating(rating);
  };

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
    if (writer && password && contents) {
      try {
        const result = await createBoardComment({
          variables: {
            createBoardCommentInput: { writer, password, contents, rating },
            boardId: router.query.boardId,
          },
        });
        refetch({ boardId: router.query.boardId });
        setWriter("");
        setPassword("");
        setContents("");
        alert("댓글을 등록했습니다.");
      } catch (error: any) {
        alert(`댓글 등록에 실패했습니다 ${error.message}`);
      }
    }
  };

  // 댓글 삭제
  const handleDeleteComment = async (event: MouseEvent<HTMLDivElement>) => {
    const password = prompt("비밀번호를 입력해 주세요");
    const target = event.target as HTMLDivElement;
    try {
      const result = await deleteBoardComment({
        variables: { password, boardCommentId: target.id },
      });
      refetch({ boardId: router.query.boardId });
      alert("댓글을 삭제했습니다.");
    } catch (error: any) {
      alert(`댓글 삭제에 실패했습니다 ${error.message}`);
    }
  };

  const hanldeOpenEdit = (event: MouseEvent<HTMLSpanElement>) => {
    const target = event.target as HTMLSpanElement;
    setEditContents(target.id);
    const editArea = event.target.parentNode.parentNode.nextSibling;
    if (editArea.style.display === "none") {
      editArea.style.display = "block";
      setDisabled(false);
    } else {
      editArea.style.display = "none";
      setDisabled(true);
    }
  };

  const handleChangeEdit = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEditContents(event.target.value);
  };

  const changeEditRating = (editRating: SetStateAction<number>) => {
    setEditRating(editRating);
    console.log(editRating);
  };

  // 댓글 수정
  const handleUpdateComment = async (event: MouseEvent<HTMLButtonElement>) => {
    const password = prompt("비밀번호를 입력해 주세요.");
    const target = event.target as HTMLDivElement;
    const myInputVariables: IMyInputVariables = {};

    const myVariables: IMyVariables = {
      updateBoardCommentInput: myInputVariables,
      password,
      boardCommentId: target.id,
    };

    if (editContents)
      myVariables.updateBoardCommentInput.contents = editContents;
    if (editRating) myVariables.updateBoardCommentInput.rating = editRating;

    try {
      const result = await updateBoardComment({
        variables: myVariables,
      });
      console.log(result);
      refetch({ boardId: router.query.boardId });
      setEditContents("");
      setDisabled(true);
      event.target.parentNode.parentNode.style.display = "none";
      alert("댓글을 수정했습니다.");
    } catch (error: any) {
      alert(`댓글 수정에 실패했습니다 ${error.message}`);
    }
  };

  return (
    <CommentWriteUI
      data={data}
      writer={writer}
      password={password}
      contents={contents}
      handleChangeWriter={handleChangeWriter}
      handleChangePassword={handleChangePassword}
      handleChangeContents={handleChangeContents}
      createComment={createComment}
      editContents={editContents}
      openEdit={hanldeOpenEdit}
      handleChangeEdit={handleChangeEdit}
      deleteComment={handleDeleteComment}
      updateComment={handleUpdateComment}
      editRating={editRating}
      rating={rating}
      changeRating={handleChangeRating}
      disabled={disabled}
      changeEditRating={changeEditRating}
    />
  );
};

export default CommentWrite;
