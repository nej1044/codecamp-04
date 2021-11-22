import { MouseEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IHomeUI {
  data?: Pick<IQuery, "fetchBoardsOfTheBest">;
  getDetail: (event: MouseEvent<HTMLDivElement>) => void;
}
