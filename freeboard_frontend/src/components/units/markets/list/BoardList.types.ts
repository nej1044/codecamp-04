import { SyntheticEvent } from "react";

export interface IMarketListUI {
  onLoadMore: () => void;
  data?: any;
  getDetail: (el: any) => () => void;
  moveWrite: () => void;
  onError: (event: SyntheticEvent<HTMLImageElement>) => void;
}
