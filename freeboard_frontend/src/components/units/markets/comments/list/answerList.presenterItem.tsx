import * as S from "./marketCommetnList.styles";
import { useState } from "react";
import { getDate } from "../../../../../commons/libraries/utils";
import MarketComment from "../write/marketComment.container";
import { useMutation, useQuery } from "@apollo/client";
import {
  DELETE_ANSWER,
  FETCH_ANSWERS,
  FETCH_USER,
} from "./marketCommentList.queries";
import {
  IMutation,
  IMutationDeleteUseditemQuestionAnswerArgs,
  IQuery,
} from "../../../../../commons/types/generated/types";
import { IAnswerListUIItem } from "./marketComment.List.types";

const AnswerListUIITEM = (props: IAnswerListUIItem) => {
  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER);
  const { refetch } =
    useQuery<Pick<IQuery, "fetchUseditemQuestionAnswers">>(FETCH_ANSWERS);
  const [isAnswerEdit, setIsAnswerEdit] = useState(false);
  const [deleteAnswer] = useMutation<
    Pick<IMutation, "deleteUseditemQuestionAnswer">,
    IMutationDeleteUseditemQuestionAnswerArgs
  >(DELETE_ANSWER);

  const onClickUpdate = () => {
    setIsAnswerEdit(true);
  };

  const onClickDelete = async () => {
    try {
      await deleteAnswer({
        variables: {
          useditemQuestionAnswerId: props.answerEl?._id,
        },
      });
      alert("질문을 삭제했습니다.");
      refetch({ useditemQuestionId: props.el?._id });
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <>
      {!isAnswerEdit && (
        <S.Answer key={props.answerEl?._id}>
          <S.AnswerImg>A</S.AnswerImg>
          <S.CommentInfo>
            <div>
              <S.CommentUser>{props.answerEl?.user.name}</S.CommentUser>
            </div>
            {props.answerEl.user._id === data?.fetchUserLoggedIn._id && (
              <S.CommentFunc>
                <S.FuncItem onClick={onClickUpdate}>수정</S.FuncItem>
                <S.FuncItem onClick={onClickDelete}>삭제</S.FuncItem>
              </S.CommentFunc>
            )}
          </S.CommentInfo>
          <S.CommentContents>{props.answerEl?.contents}</S.CommentContents>
          <div>
            <S.CommentDate>{getDate(props.answerEl?.createdAt)}</S.CommentDate>
          </div>
        </S.Answer>
      )}
      {isAnswerEdit && (
        <MarketComment
          isAnswerEdit={true}
          setIsAnswerEdit={setIsAnswerEdit}
          answerEl={props.answerEl}
        />
      )}
    </>
  );
};

export default AnswerListUIITEM;
