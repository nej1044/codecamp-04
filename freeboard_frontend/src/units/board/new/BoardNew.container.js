import { useRouter } from 'next/router'
import { useMutation, gql } from '@apollo/client'
import { useState } from "react"
import BoardNewUI from './BoardNew.presenter'
import { CREATE_BOARD } from './BoardNew.queries'
import { TopicBtn } from './BoardNew.styles'


const BoardNew = () => {
  const router = useRouter()
  const [ createBoard ] = useMutation(CREATE_BOARD)
  const [writer, setWriter] = useState('')
  const [password, setPassword] = useState('')
  const [title, setTitle] = useState('')
  const [contents, setContents] = useState('')
  const [errorWriter, setErrorWriter] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [errorTitle, setErrorTitle] = useState('')
  const [errorContents, setErrorContents] = useState('')
  const [topic, setTopic] = useState('')
  const [btnColor, setBtnColor] = useState(false)

  function hanldeClickTopic(event) {
    setTopic(event.target.value)
    event.target.parentNode.childNodes[0].style = TopicBtn.style
    event.target.parentNode.childNodes[1].style = TopicBtn.style
    event.target.parentNode.childNodes[2].style = TopicBtn.style
    event.target.style = 'background-color: #8EB695; border: 1px solid #8EB695;'
  }

  let totalTitle = `[${topic}]` + {title}

  function handleChangeWriter(event) {
      setWriter(event.target.value)
      if (event.target.value !== '') {
        setErrorWriter('')
      }
      if (event.target.value !== '' && password !== '' && title !== '' && contents !== '') {
        setBtnColor(true)
      } else {
        setBtnColor(false)
      }
  }

  function handleChangePassword(event) {
      setPassword(event.target.value)
      if (event.target.value !== '') {
        setErrorPassword('')
      }
      if (writer !== '' && event.target.value !== '' && title !== '' && contents !== '') {
        setBtnColor(true)
      } else {
        setBtnColor(false)
      }
  }

  function handleChangeTitle(event) {
      setTitle(event.target.value)
      if (event.target.value !== '') {
        setErrorTitle('')
      }
      if (writer !== '' && password !== '' && event.target.value !== '' && contents !== '') {
        setBtnColor(true)
      } else {
        setBtnColor(false)
      }
  }

  function handleChangeContents(event) {
      setContents(event.target.value)
      if (event.target.value !== '') {
        setErrorContents('')
      }
      if (writer !== '' && password !== '' && title !== '' && event.target.value !== '') {
        setBtnColor(true)
      } else {
        setBtnColor(false)
      }
  }

  async function handleClickBoard() {
    // 작성자 검증
    if (writer === '') {
      setErrorWriter('이름을 정확히 입력해 주세요.')
    }

    // 비밀번호 검증
    if (password === '') {
      setErrorPassword('비밀번호를 정확히 입력해 주세요.')
    } 
    // 제목 검증
    if (title === '') {
      setErrorTitle('제목을 입력해 주세요.')
    } 
    // 내용 검증
    if (contents === '') {
      setErrorContents('내용을 입력해 주세요.')
    } 
    // 모두 작성되었다면 작성정보전달
    if (writer !== '' && password !== '' && title !== '' && contents !== '') {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer, password, title, contents
            }
          }
        })
        console.log(result)
        alert('게시물 등록이 완료되었습니다.')
        router.push(`/boards/${result.data.createBoard._id}`)
      } catch(error) {
        alert(`상품 등록에 실패했습니다. ${error.message}`)
      }
    } else {
      
    }
  }
  return (
    <BoardNewUI selectedTopic={hanldeClickTopic} changedWriter={handleChangeWriter} changedPassword = {handleChangePassword} 
    changedTitle = {handleChangeTitle} changedContents = {handleChangeContents} errorWriter = {errorWriter} errorPassword = {errorPassword}
    errorTitle = {errorTitle} errorContents = {errorContents} sendBoard = {handleClickBoard} btnColor = {btnColor}/>
  )
}

export default BoardNew