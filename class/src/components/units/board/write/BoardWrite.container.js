import { useMutation } from '@apollo/client'
import { useState } from 'react'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD } from './BoardWrite.queries'


const BoardWrite = () => {
  const [ createBoard ] = useMutation(CREATE_BOARD)
  const [myWriter, setMyWriter] = useState("")
  const [myTitle, setMyTitle] = useState("")
  const [myContents, setMyContents] = useState("")
  const [myQqq, setQqq] = useState(false)

  function onChangeMyWriter(event) {
    setMyWriter(event.target.value)
    if(event.target.value !== '' && myTitle !== '' && myContents !== '') {
      setQqq(true)
    } else {
      setQqq(false)
    }
  }
  
  function onChangeMyTitle(event) {
    setMyTitle(event.target.value)
    if(myWriter !== '' && event.target.value !== '' && myContents !== '') {
      setQqq(true)
    } else {
      setQqq(false)
    }
  }
  
  function onChangeMyContents(event) {
    setMyContents(event.target.value)
    if(myWriter !== '' && myTitle !== '' && event.target.value !== '') {
      setQqq(true)
    } else {
      setQqq(false)
    }
  }

  // 함수
  async function zzz() {
    const result = await createBoard( {
      variables: {writer: myWriter, title: myTitle, contents: myContents}
    })
    console.log(result)
    console.log(result.data.createBoard.message)
  }
  return(
    <BoardWriteUI qqq={myQqq} onChangeMyWriter={onChangeMyWriter} onChangeMyTitle={onChangeMyTitle} onChangeMyContents={onChangeMyContents} zzz={zzz}/>
  )
}
export default BoardWrite