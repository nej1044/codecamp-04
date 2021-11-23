import { ApolloQueryResult } from "@apollo/client";
import styled from "@emotion/styled";
import { useState, MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

interface ISideBar {
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}

const SideBar = (props: ISideBar) => {
  return <></>;
};
export default SideBar;
