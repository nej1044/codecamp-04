import { ChangeEvent, MouseEvent, SetStateAction } from "react";

export interface ICommentWriteUIProps {
  isEdit?: boolean;
  data?: any;
  writer: string;
  password: string;
  contents: string;
  editContents: string;
  rating: number;
  editRating: number;
  disabled: boolean;
  changeRating: (rating: SetStateAction<number>) => void;
  handleChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  deleteComment: (event: MouseEvent<HTMLDivElement>) => void;
  updateComment: (event: MouseEvent<HTMLButtonElement>) => void;
  createComment: () => void;
  handleChangeEdit: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  openEdit: (event: MouseEvent<HTMLSpanElement>) => void;
  changeEditRating: (editRating: SetStateAction<number>) => void;
}

export interface IMyVariables {
  updateBoardCommentInput: IMyInputVariables;
  password: string | null;
  boardCommentId: string;
}

export interface IMyInputVariables {
  rating?: number;
  contents?: string;
}

export interface ICommentWriteStyledProps {
  isEdit?: boolean;
}
