import { SyntheticEvent } from "react";

export interface ITodayItemUI {
  todayItem: any;
  getDetail: (id: string) => () => void;
  onError: (event: SyntheticEvent<HTMLImageElement>) => void;
}
