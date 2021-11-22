import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  first: any;
  second: any;
  startPage: number;
  lastPage: number;
  current: any;
  count: number;
  handleReset: () => void;
  changeSearchValue: (event: ChangeEvent<HTMLInputElement>) => void;
  clickSearchValue: (event: MouseEvent<HTMLElement>) => void;
  handleCreate: () => void;
  onClickPage: (event: MouseEvent<HTMLElement>) => void;
  getDetail: (event: MouseEvent<HTMLDivElement>) => void;
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  setStartPage: Dispatch<SetStateAction<number>>;
  setCurrent: Dispatch<SetStateAction<number>>;
}
