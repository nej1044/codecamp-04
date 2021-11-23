import { ChangeEvent, Dispatch, SetStateAction } from "react";
import {
  IQueryFetchBoardCommentsArgs,
  IQuery,
} from "../../../commons/types/generated/types";
import { ApolloQueryResult } from "@apollo/client";

interface IInputs {
  writer: string;
  password: string;
  contents: string;
}

export interface ICommentWriteUIProps {
  isEdit?: boolean;
  data?: any;
  rating: number;
  inputs: IInputs;
  routerId: string;
  startPage: number;
  handleChangeInputs: (
    event: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ) => void;
  changeRating: (rating: SetStateAction<number>) => void;
  createComment: () => void;
  refetch: (
    variables: Partial<IQueryFetchBoardCommentsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardComments">>>;
  fetchMore: any;
  setStartPage: Dispatch<SetStateAction<number>>;
}

export interface ICommentWriteStyledProps {
  isEdit?: boolean;
}
