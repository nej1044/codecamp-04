import { IQuery } from "../../../commons/types/generated/types";

export interface IHomeUI {
  data?: Pick<IQuery, "fetchBoardsOfTheBest">;
  fetchUseditemBest?: Pick<IQuery, 'fetchUseditemsOfTheBest'>
  getDetail: (id: string) => () => void;
  getProject: (id: string) => () => void;
}
