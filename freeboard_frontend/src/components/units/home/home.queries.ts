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

export const FETCH_USEDITEM_BEST = gql`
  query {
    fetchUseditemsOfTheBest {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      seller {
        _id
        email
        name
      }
    }
  }
`;
