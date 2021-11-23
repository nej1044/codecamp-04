import InfiniteScrollUI from "./InfiniteScroll.presenter";
import { useMutation } from "@apollo/client";
import { SetStateAction, ChangeEvent, MouseEvent, useState } from "react";
import { DELETE_COMMENT, UPDATE_COMMENT } from "./InfitniteScroll.queries";
import {
  IMyVariables,
  IMyInputVariables,
  IInfiniteScroll,
} from "./InfiniteScroll.types";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
} from "../../../commons/types/generated/types";

const InfiniteScroll = (props: IInfiniteScroll) => {
  const [disabled, setDisabled] = useState(true);
  const [editContents, setEditContents] = useState("");
  const [editRating, setEditRating] = useState(3);
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_COMMENT);
  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_COMMENT);

  // open edit
  const hanldeOpenEdit = (event: MouseEvent<HTMLSpanElement>) => {
    const target = event.target as HTMLSpanElement;
    setEditContents(target.id);
    const editArea: any = target.parentNode?.parentNode?.nextSibling;
    if (editArea?.style.display === "none") {
      editArea.style.display = "block";
      setDisabled(false);
    } else if (editArea?.style.display === "block") {
      editArea.style.display = "none";
      setDisabled(true);
    }
  };

  // 댓글 수정
  const handleChangeEdit = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEditContents(event.target.value);
  };

  const changeEditRating = (editRating: SetStateAction<number>) => {
    setEditRating(editRating);
  };

  const handleUpdateComment = async (event: MouseEvent<HTMLButtonElement>) => {
    const password = prompt("비밀번호를 입력해 주세요.");
    const target: any = event.target as HTMLDivElement;
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
      props.refetch({ boardId: props.routerId });
      setEditContents("");
      setDisabled(true);
      target.parentNode.parentNode.style.display = "none";
      alert("댓글을 수정했습니다.");
    } catch (error: any) {
      alert(`댓글 수정에 실패했습니다 ${error.message}`);
    }
  };

  // 댓글 삭제
  const handleDeleteComment = async (event: MouseEvent<HTMLDivElement>) => {
    const password = prompt("비밀번호를 입력해 주세요");
    const target = event.target as HTMLDivElement;
    try {
      await deleteBoardComment({
        variables: { password, boardCommentId: target.id },
      });
      props.refetch({ boardId: props.routerId });
      alert("댓글을 삭제했습니다.");
    } catch (error: any) {
      alert(`댓글 삭제에 실패했습니다 ${error.message}`);
    }
  };

  // loadmore
  const onLoadMore = () => {
    if (!props.data) return;

    props.fetchMore({
      variables: {
        page: Math.ceil(props.data?.fetchBoardComments.length / 10) + 1,
      },
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
        if (!fetchMoreResult?.fetchBoardComments)
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          };
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <InfiniteScrollUI
      editContents={editContents}
      openEdit={hanldeOpenEdit}
      onLoadMore={onLoadMore}
      data={props.data}
      disabled={disabled}
      handleChangeEdit={handleChangeEdit}
      changeEditRating={changeEditRating}
      editRating={editRating}
      deleteComment={handleDeleteComment}
      updateComment={handleUpdateComment}
    />
  );
};

export default InfiniteScroll;
