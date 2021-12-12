import { ChangeEvent } from "react";

export interface IMarketCommentUI {
  isEdit: boolean;
  data?: any;
  handleChangeInput: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  contents: string;
  el?: any;
  updateQuestion: () => void;
  createQuestion: () => void;
  fetchQuestions?: any;
}

export interface IMarketComment {
  el?: any;
  setIsEdit?: any;
  isEdit: boolean;
}
