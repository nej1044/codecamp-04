import { ChangeEvent, MouseEvent } from "react";

export interface IBoardNewProps {
  isEdit?: boolean;
  btnColor?: boolean;
  data?: any;
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
}

export interface IMyVariables {
  updateBoardInput: IUpdateBoardInput;
  password: string;
  boardId: string;
}

export interface IBoardNewUIProps {
  isEdit?: boolean;
  btnColor?: boolean;
  data?: any;
  selectedTopic: (event: MouseEvent<HTMLInputElement>) => void;
  changedWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  changedPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  changedTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  changedContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  changedUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  errorWriter: string;
  errorPassword: string;
  errorTitle: string;
  errorContents: string;
  sendBoard: () => void;
  editBoard: () => void;
}

export interface IBoardNewEmotion {
  btnColor?: boolean;
}
