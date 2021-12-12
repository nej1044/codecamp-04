import { gql } from "@apollo/client";

export const FETCH_SOLD = gql`
  query fetchUseditemsISold($search: String, $page: Int) {
    fetchUseditemsISold(search: $search, page: $page) {
      _id
      name
      price
      pickedCount
      seller {
        name
      }
      images
      buyer {
        _id
      }
    }
  }
`;

export const FETCH_BOUGHT = gql`
  query fetchUseditemsIBought($search: String, $page: Int) {
    fetchUseditemsIBought(search: $search, page: $page) {
      _id
      name
      price
      pickedCount
      seller {
        name
      }
      images
      buyer {
        _id
      }
    }
  }
`;
