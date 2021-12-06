import { CREATE_COMMENT, FECTH_COMMENTS } from "./Comment.queries";
import { useState, ChangeEvent, SetStateAction } from "react";
import { useQuery, useMutation } from "@apollo/client";
import CommentWriteUI from "./Comment.presenter";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../commons/types/generated/types";

const CommentWrite = () => {
  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    contents: "",
  });
  const [rating, setRating] = useState(3);
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_COMMENT);
  const routerId = String(router.query.boardId);
  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FECTH_COMMENTS, {
    variables: {
      page: startPage,
      boardId: routerId,
    },
  });

  // 댓글 쓰기
  const handleChangeRating = (rating: SetStateAction<number>) => {
    setRating(rating);
  };

  const hanldeChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setInputs({
      ...inputs,
      [target.name]: target.value,
    });
  };

  const createComment = async () => {
    if (inputs) {
      try {
        await createBoardComment({
          variables: {
            createBoardCommentInput: { ...inputs, rating },
            boardId: String(router.query.boardId),
          },
        });
        refetch({ boardId: String(router.query.boardId) });
        setInputs({
          writer: "",
          password: "",
          contents: "",
        });
        alert("댓글을 등록했습니다.");
      } catch (error: any) {
        alert(`댓글 등록에 실패했습니다 ${error.message}`);
      }
    }
  };

  return (
    <CommentWriteUI
      data={data}
      inputs={inputs}
      routerId={routerId}
      refetch={refetch}
      setStartPage={setStartPage}
      handleChangeInputs={hanldeChangeInputs}
      createComment={createComment}
      rating={rating}
      changeRating={handleChangeRating}
      startPage={startPage}
      fetchMore={fetchMore}
    />
  );
};

export default CommentWrite;
