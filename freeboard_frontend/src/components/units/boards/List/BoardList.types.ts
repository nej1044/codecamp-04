import { ChangeEvent, MouseEvent } from "react";

export interface IBoardListUIProps {
  first: any;
  second: any;
  startPage: number;
  lastPage: number;
  current: any;
  handleReset: () => void;
  changeSearchValue: (event: ChangeEvent<HTMLInputElement>) => void;
  clickSearchValue: (event: MouseEvent<HTMLElement>) => void;
  handleCreate: () => void;
  onClickPage: (event: MouseEvent<HTMLElement>) => void;
  getDetail: (event: MouseEvent<HTMLDivElement>) => void;
}
