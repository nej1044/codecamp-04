import { MouseEvent, SyntheticEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IHomeUI {
  data?: Pick<IQuery, "fetchBoardsOfTheBest">;
  getDetail: (event: MouseEvent<HTMLDivElement>) => void;
  fetchUseditemBest?: any;
  onError: (event: SyntheticEvent<HTMLImageElement>) => void;
  getProject: (id: string) => () => void;
}
