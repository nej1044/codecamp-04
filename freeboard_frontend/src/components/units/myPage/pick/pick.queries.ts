import { gql } from "@apollo/client";

export const FETCH_PICK = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
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
