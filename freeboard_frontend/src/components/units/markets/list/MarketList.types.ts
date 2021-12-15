import { ChangeEvent, MouseEvent } from "react";

export interface IMarketListUI {
  onLoadMore: () => void;
  data?: any;
  getDetail: (el: any) => () => void;
  moveWrite: () => void;
  changeSearchValue: (event: ChangeEvent<HTMLInputElement>) => void;
  clickSearchValue: () => void;
  confirmSearch: string;
  getSoldout: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface IMarketListStyled {
  isSoldout?: boolean;
  isMatched?: boolean;
}
