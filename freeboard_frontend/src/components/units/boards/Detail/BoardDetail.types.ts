import { MouseEvent, ChangeEvent } from "react";

export interface IBoardDetailUIProps {
  first?: any;
  second?: any;
  date: any;
  writer: string;
  password: string;
  contents: string;
  addressShow: (event: MouseEvent<HTMLImageElement>) => void;
  upLike: () => void;
  downlike: () => void;
  handleList: () => void;
  handleEdit: () => void;
  handleDeleteBoard: () => void;
  handleChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  deleteComment: (event: MouseEvent<HTMLDivElement>) => void;
  updateComment: (event: MouseEvent<HTMLDivElement>) => void;
  createComment: () => void;
}

export interface IMyVariables {
  updateBoardCommentInput: IMyInputVariables;
  password: string | null;
  boardCommentId: string;
}

export interface IMyInputVariables {
  contents?: string;
}
