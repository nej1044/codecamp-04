import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

export const FETCH_PAGES = gql`
  query fetchBoardsCount($search: String) {
    fetchBoardsCount(search: $search)
  }
`;

export const FECTH_COMMENTS = gql`
  query fetchBoardComments($page: Int, $boardId: ID!) {
    fetchBoardComments(page: $page, boardId: $boardId) {
      _id
      writer
      contents
      rating
      createdAt
    }
  }
`;
