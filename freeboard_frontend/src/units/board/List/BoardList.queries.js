import { gql } from '@apollo/client'

export const FETCH_BOARDS = gql `
  query fetchBoards($page: Int){ 
    fetchBoards(page: $page) {
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
      title
      writer
      createdAt
      likeCount
    }
  }
`