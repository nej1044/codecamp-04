import { useMutation, gql } from '@apollo/client'
import { useState } from 'react'

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
	createBoard(writer: $writer, title: "$title, contents: $contents) {
    _id
    number
    message
    }
  }
`

export default function GraphglMutationBoard2Page() {
  // 구조분해할당/비구조할당
  const [ createBoard ] = useMutation(CREATE_BOARD)
  const [message, setMessage] = useState('')
  // 함수
  async function zzz() {
    const result = await createBoard( {
      variables: {writer: "영희", title: "게시글", contents: " 내용"}
    })
    console.log(result)
    console.log(result.data.createBoard.message)
    setMessage(result.data.createBoard.message)
  }
  

  return (
    <>
      <div>{message}</div>
      <button onClick={zzz}>GRAPHQL-API 요청하기</button>
    </>
  )
}