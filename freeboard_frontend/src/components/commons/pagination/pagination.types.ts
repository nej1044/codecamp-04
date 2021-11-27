import { ApolloQueryResult } from "@apollo/client";
import { Dispatch, SetStateAction, MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../commons/types/generated/types";

export interface IPagination {
  count: number;
  startPage: number;
  setStartPage: Dispatch<SetStateAction<number>>;
  setCurrent: Dispatch<SetStateAction<number>>;
  current: any;
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}

export interface IPaginationUI {
  onClickPrevPage: () => void;
  startPage: number;
  lastPage: number;
  current: any;
  onClickPage: (event: MouseEvent<HTMLElement>) => void;
  onClickNextPage: () => void;
}

export interface IPaginationStyled {
  current: boolean;
}
