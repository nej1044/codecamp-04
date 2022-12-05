import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import { useRef, MouseEvent, SyntheticEvent } from "react";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";
import { Modal } from "antd";

const BoardDetail = () => {
  const router = useRouter();
  const [deleteBoard] =
    useMutation<Pick<IMutation, "deleteBoard">>(DELETE_BOARD);
  const [likeBoard] = useMutation<Pick<IMutation, "likeBoard">>(LIKE_BOARD);
  const [dislikeBoard] =
    useMutation<Pick<IMutation, "dislikeBoard">>(DISLIKE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">>(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  // 주소보여주기
  const addressBox = useRef<HTMLDivElement>(null);
  function handleClickShow(event: MouseEvent<HTMLImageElement>) {
    if (addressBox?.current?.style.display === "none") {
      addressBox.current.style.display = "flex";
    } else if (addressBox?.current?.style.display === "flex") {
      addressBox.current.style.display = "none";
    }
  }

  // 게시글 삭제
  async function handleDeleteBoard() {
    try {
      await deleteBoard({
        variables: { boardId: router.query.boardId },
      });
      Modal.success({
        content: "게시물을 삭제했습니다.",
      });
      router.push("/boards");
    } catch (error: any) {
      Modal.error({
        content: `게시물 삭제에 실패했습니다 ${error.message}`,
      });
    }
  }

  // 이미지 에러 시
  const imgError = (event: SyntheticEvent<HTMLImageElement>) => {
    (event.target as any).style = "display: none;";
  };

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
      Modal.error({
        content: `${error.message}`,
      });
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
      Modal.error({
        content: `${error.message}`,
      });
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
      addressBox={addressBox}
      imgError={imgError}
    />
  );
};

export default BoardDetail;
