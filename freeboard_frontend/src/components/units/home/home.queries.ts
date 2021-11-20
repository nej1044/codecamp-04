import { gql } from "@apollo/client";

export const FETCH_BEST = gql`
  query {
    fetchBoardsOfTheBest {
      _id
      title
      writer
      contents
      createdAt
      likeCount
    }
  }
`;
