import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
} from "../../../../../commons/types/generated/types";
import MarketComment from "../write/marketComment.container";
import { IMarketCommentListUIItem } from "./marketComment.List.types";
import { DELETE_QUESTION, FETCH_QUESTIONS } from "./marketCommentList.queries";
import * as S from "./marketCommetnList.styles";

const MarketCommentListUIItem = (props: IMarketCommentListUIItem) => {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const { refetch } = useQuery(FETCH_QUESTIONS);
  const [deleteMarketComment] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_QUESTION);

  const onClickUpdate = () => {
    setIsEdit(true);
  };

  const onClickDelete = async () => {
    try {
      await deleteMarketComment({
        variables: {
          useditemQuestionId: props.el?._id,
        },
      });
      alert("질문을 삭제했습니다.");
      refetch({ useditemId: String(router.query.useditemId) });
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <>
      {!isEdit && (
        <S.Comment>
          <S.CommentImg src="/images/detail/question.png" />
          <S.CommentInfo>
            <div>
              <S.CommentUser>{props.el?.user.name}</S.CommentUser>
            </div>
            <S.CommentFunc>
              <S.FuncItem id={props.el?.contents} onClick={onClickUpdate}>
                수정
              </S.FuncItem>
              <S.FuncItem onClick={onClickDelete}>삭제</S.FuncItem>
            </S.CommentFunc>
          </S.CommentInfo>
          <S.CommentContents>{props.el?.contents}</S.CommentContents>
        </S.Comment>
      )}
      {isEdit && (
        <MarketComment isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
};

export default MarketCommentListUIItem;
