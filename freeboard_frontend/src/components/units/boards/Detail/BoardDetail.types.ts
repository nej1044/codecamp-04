import { MouseEvent, ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IBoardDetailUIProps {
  data?: any;
  addressShow: (event: MouseEvent<HTMLImageElement>) => void;
  upLike: () => void;
  downlike: () => void;
  handleList: () => void;
  handleEdit: () => void;
  handleDeleteBoard: () => void;
}
