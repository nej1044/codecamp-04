import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";

export interface IBoardListUIProps {
  first: any;
  startPage: number;
  current: any;
  count: number;
  changeSearchValue: (event: ChangeEvent<HTMLInputElement>) => void;
  clickSearchValue: (event: MouseEvent<HTMLElement>) => void;
  handleCreate: () => void;
  getDetail: (event: MouseEvent<HTMLDivElement>) => void;
  // refetch: (
  //   variables?: Partial<IQueryFetchBoardsArgs> | undefined
  // ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetch: any;
  setStartPage: Dispatch<SetStateAction<number>>;
  setCurrent: Dispatch<SetStateAction<number>>;
  categorySelector: (event: MouseEvent<HTMLLIElement>) => void;
  active: string;
  confirmSearch: string;
}

export interface IBoardListEmotionProps {
  active?: boolean;
  isMatched?: boolean;
}
