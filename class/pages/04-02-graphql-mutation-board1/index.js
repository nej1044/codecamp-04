import { useMutation, gql } from '@apollo/client'
import { useState } from 'react'

const CREATE_BOARD = gql`
  mutation {
	createBoard(writer: "노은정", title: "게시글이에용", contents: "내용이구용") {
    _id
    number
    message
    }
  }
`

export default function GraphglMutationBoard1Page() {
  // 구조분해할당/비구조할당
  const [ createBoard ] = useMutation(CREATE_BOARD)
  const [message, setMessage] = useState('')
  // 함수
  async function zzz() {
    const result = await createBoard()
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