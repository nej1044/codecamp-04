import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
  // IQuery,
} from "../../../../../commons/types/generated/types";
import MarketComment from "../write/marketComment.container";
import { IMarketCommentListUIItem } from "./marketComment.List.types";
import {
  DELETE_QUESTION,
  FETCH_QUESTIONS,
  // FETCH_USER,
} from "./marketCommentList.queries";
import * as S from "./marketCommetnList.styles";
import { getDate } from "../../../../../commons/libraries/utils";
import AnswerListUI from "./answerList.presenter";

const MarketCommentListUIItem = (props: IMarketCommentListUIItem) => {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);
  const { refetch } = useQuery(FETCH_QUESTIONS);
  // const { data: fetchUser } =
  //   useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER);
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

  const onClickAnswer = () => {
    setIsAnswer(true);
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
          <S.CommentFooter>
            <S.CommentDate>{getDate(props.el?.createdAt)}</S.CommentDate>
            <span onClick={onClickAnswer}>답글쓰기</span>
          </S.CommentFooter>
          {isAnswer && (
            <MarketComment
              isAnswer={true}
              setIsAnswer={setIsAnswer}
              el={props.el}
            />
          )}
          <AnswerListUI el={props.el} />
        </S.Comment>
      )}
      {isEdit && (
        <MarketComment isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
};

export default MarketCommentListUIItem;
