import { gql } from '@apollo/client'

export const FETCH_BOARDS = gql `
  query fetchBoards($search: String, $page: Int) { 
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      contents
      createdAt 
    }
  }
`

export const FETCH_BEST = gql`
  query {
    fetchBoardsOfTheBest {
      _id
      title
      writer
      createdAt
      likeCount
    }
  }
`

export const FETCH_PAGES = gql`
  query fetchBoardsCount ($search: String) {
    fetchBoardsCount(search: $search)
    }
`