import { ChangeEvent, MouseEvent } from "react";

export interface ICommentWriteUIProps {
  data?: any;
  writer: string;
  password: string;
  contents: string;
  editContents: string;
  rating: number;
  changeRating: (rating: SetStateAction<number>) => void;
  handleChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  deleteComment: (event: MouseEvent<HTMLDivElement>) => void;
  updateComment: (event: MouseEvent<HTMLButtonElement>) => void;
  createComment: () => void;
  handleChangeEdit: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  openEdit: (event: MouseEvent<HTMLSpanElement>) => void;
}

export interface IMyVariables {
  updateBoardCommentInput: IMyInputVariables;
  password: string | null;
  boardCommentId: string;
}

export interface IMyInputVariables {
  contents?: string;
}
