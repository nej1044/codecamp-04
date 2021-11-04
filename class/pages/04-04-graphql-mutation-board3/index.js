import { useMutation, gql } from '@apollo/client'
import { useState } from 'react'

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
	createBoard(writer: $writer, title: $title, contents: $contents) {
    _id
    number
    message
    }
  }
`

 
export default function GraphglMutationBoard3Page() {
  // 구조분해할당/비구조할당
  const [ createBoard ] = useMutation(CREATE_BOARD)
  const [myWriter, setMyWriter] = useState("")
  const [myTitle, setMyTitle] = useState("")
  const [myContents, setMyContents] = useState("")

  function onChangeMyWriter(event) {
    setMyWriter(event.target.value)
  }
  
  function onChangeMyTitle(event) {
    setMyTitle(event.target.value)
  }
  
  function onChangeMyContents(event) {
    setMyContents(event.target.value)
  }

  // 함수
  async function zzz() {
    const result = await createBoard( {
      variables: {writer: myWriter, title: myTitle, contents: myContents}
    })
    console.log(result)
    console.log(result.data.createBoard.message)
  }
  

  return (
    <>
      작성자: <input type="text" onChange={onChangeMyWriter} /><br />
      제목: <input type="text" onChange={onChangeMyTitle} /><br />
      내용: <input type="text" onChange={onChangeMyContents} /><br />
      <button onClick={zzz}>게시물 등록</button>
    </>
  )
}