import { ChangeEvent, MouseEvent, SetStateAction } from "react";
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
  editContents: string;
  rating: number;
  editRating: number;
  disabled: boolean;
  inputs: IInputs;
  routerId: string;
  startPage: number;
  handleChangeInputs: (
    event: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ) => void;
  changeRating: (rating: SetStateAction<number>) => void;
  deleteComment: (event: MouseEvent<HTMLDivElement>) => void;
  updateComment: (event: MouseEvent<HTMLButtonElement>) => void;
  createComment: () => void;
  handleChangeEdit: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  openEdit: (event: MouseEvent<HTMLSpanElement>) => void;
  changeEditRating: (editRating: SetStateAction<number>) => void;
  refetch: (
    variables: Partial<IQueryFetchBoardCommentsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardComments">>>;
}

export interface ICommentWriteStyledProps {
  isEdit?: boolean;
}
