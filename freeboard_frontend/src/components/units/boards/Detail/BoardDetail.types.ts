import { MouseEvent, ChangeEvent } from "react";

export interface IBoardDetailUIProps {
  data?: any;
  writer: string;
  password: string;
  contents: string;
  editContents: string;
  addressShow: (event: MouseEvent<HTMLImageElement>) => void;
  upLike: () => void;
  downlike: () => void;
  handleList: () => void;
  handleEdit: () => void;
  handleDeleteBoard: () => void;
}
