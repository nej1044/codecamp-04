import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent, MouseEvent, SetStateAction } from "react";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../commons/types/generated/types";

export interface IInfiniteScroll {
  data: Pick<IQuery, "fetchBoardComments">;
  refetch: (
    variables: Partial<IQueryFetchBoardCommentsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardComments">>>;
  routerId: string;
  fetchMore: any;
  startPage: number;
}

export interface IMyInputVariables {
  rating?: number;
  contents?: string;
}

export interface IMyVariables {
  updateBoardCommentInput: IMyInputVariables;
  password: string | null;
  boardCommentId: string;
}

export interface IInfiniteScrollUI {
  onLoadMore: () => void;
  data: Pick<IQuery, "fetchBoardComments">;
  disabled: boolean;
  changeEditRating: (event: SetStateAction<number>) => void;
  openEdit: (event: MouseEvent<HTMLSpanElement>) => void;
  deleteComment: (evnet: MouseEvent<HTMLDivElement>) => void;
  handleChangeEdit: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  editContents: string;
  updateComment: (evnet: MouseEvent<HTMLButtonElement>) => void;
  editRating: number;
}
