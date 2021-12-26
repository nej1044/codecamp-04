import { ChangeEvent, MouseEvent } from "react";

export interface ILectureUI {
  handleChangeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  url: string;
  onClickUpload: () => void;
  data: any[];
  dataId: string[];
  onClickUpdate: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickDelete: (event: MouseEvent<HTMLSpanElement>) => void;
}
