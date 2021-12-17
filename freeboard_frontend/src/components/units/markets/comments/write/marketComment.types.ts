import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IQuery } from "../../../../../commons/types/generated/types";

export interface IMarketCommentUI {
  isEdit?: boolean;
  data?: Pick<IQuery, "fetchUserLoggedIn">;
  handleChangeInput: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  contents: string;
  el?: any;
  updateQuestion: () => void;
  createQuestion: () => void;
  fetchQuestions?: any;
  isAnswer?: boolean;
  createAnswer: () => void;
  isAnswerEdit?: boolean;
  updateAnswer: () => void;
  answerEl?: any;
}

export interface IMarketComment {
  el?: any;
  answerEl?: any;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  isEdit?: boolean;
  isAnswer?: boolean;
  isAnswerEdit?: boolean;
  setIsAnswer?: Dispatch<SetStateAction<boolean>>;
  setIsAnswerEdit?: Dispatch<SetStateAction<boolean>>;
}

export interface IMarketCommentStyled {
  isAnswer?: boolean;
  isAnswerEdit?: boolean;
}
