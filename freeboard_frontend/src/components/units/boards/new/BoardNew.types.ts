import { ChangeEvent, MouseEvent } from "react";
import { Maybe } from "../../../../commons/types/generated/types";

export interface IBoardNewProps {
  isEdit?: boolean;
  btnColor?: boolean;
  data?: any;
}
export interface IMyBoardAddress {
  zipcode?: Maybe<string> | undefined;
  address?: Maybe<string> | undefined;
  addressDetail?: Maybe<string> | undefined;
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress: IMyBoardAddress;
}

export interface IMyVariables {
  updateBoardInput: IUpdateBoardInput;
  password: string;
  boardId: string;
}

export interface IBoardNewUIProps {
  isEdit?: boolean;
  btnColor?: boolean;
  isOpen: boolean;
  data?: any;
  topic: string | boolean;
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
  onToggleModal: () => void;
  zipcode: string;
  address: string;
  handleComplete: (data: any) => void;
  changedDetailAddress: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IBoardNewEmotion {
  btnColor?: boolean;
  topic?: boolean;
}
