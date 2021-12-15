import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../../commons/types/generated/types";
import AnswerListUIITEM from "./answerList.presenterItem";
import { IAnswerListUI } from "./marketComment.List.types";
import { FETCH_ANSWERS } from "./marketCommentList.queries";

const AnswerListUI = (props: IAnswerListUI) => {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_ANSWERS, {
    variables: { useditemQuestionId: props.el._id },
  });

  return (
    <>
      {data?.fetchUseditemQuestionAnswers.map((answerEl) => (
        <AnswerListUIITEM
          key={answerEl._id}
          answerEl={answerEl}
          el={props.el}
        />
      ))}
    </>
  );
};

export default AnswerListUI;
