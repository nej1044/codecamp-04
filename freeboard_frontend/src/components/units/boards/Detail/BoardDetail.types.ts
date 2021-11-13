import { MouseEvent, ChangeEvent } from "react";

export interface IBoardDetailUIProps {
  data?: any;
  date: any;
  addressShow: (event: MouseEvent<HTMLImageElement>) => void;
  upLike: () => void;
  downlike: () => void;
  handleList: () => void;
  handleEdit: () => void;
  handleDeleteBoard: () => void;
  handleChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  createComment: () => void;
}
