import { IQuery } from "../../../../../commons/types/generated/types";

export interface IMarketCommentListUI {
  onLoadMore: () => void;
  data?: Pick<IQuery, "fetchUseditemQuestions"> | undefined;
}

export interface IMarketCommentListUIItem {
  el?: any;
}

export interface IAnswerListUI {
  el?: any;
}

export interface IAnswerListUIItem {
  // data?: Pick<IQuery, "fetchUseditemQuestionAnswers"> | undefined;
  answerEl?: any;
  el?: any;
}

export interface IMarketCommentListStyled {
  isEdit?: boolean;
  isAnswer?: boolean;
  isAnswerEdit?: boolean;
}
