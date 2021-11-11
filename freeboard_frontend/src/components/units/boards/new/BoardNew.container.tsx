import { useRouter } from 'next/router'
import { useMutation, useQuery } from '@apollo/client'
import { MouseEvent, ChangeEvent, useState } from "react"
import BoardNewUI from './BoardNew.presenter'
import { CREATE_BOARD, UPDATE_BOARD, FETCH_BOARD } from './BoardNew.queries'
import { TopicBtn } from './BoardNew.styles'
import { IBoardNewProps, IMyVariables, IUpdateBoardInput } from './BoardNew.types'


const BoardNew = (props: IBoardNewProps) => {
  const router = useRouter()
  const [ createBoard ] = useMutation(CREATE_BOARD)
  const [ updateBoard ] = useMutation(UPDATE_BOARD)
  const { data } = useQuery(FETCH_BOARD, {
    variables: {boardId: router.query.boardId}
  })
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
  const [snsUrl, setSNSUrl] = useState('')

  function hanldeClickTopic(event: MouseEvent<HTMLInputElement>) {
    setTopic(event.target.value)
    event.target.parentNode.childNodes[0].style = TopicBtn.style
    event.target.parentNode.childNodes[1].style = TopicBtn.style
    event.target.parentNode.childNodes[2].style = TopicBtn.style
    event.target.style = 'background-color: #8EB695; border: 1px solid #8EB695;'
  }
  

  function handleChangeWriter(event: ChangeEvent<HTMLInputElement>) {
      setWriter(event.target.value)
      if (event.target.value) {
        setErrorWriter('')
      }
      if (event.target.value && password && title && contents) {
        setBtnColor(true)
      } else {
        setBtnColor(false)
      }
  }

  function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
      setPassword(event.target.value)
      if (event.target.value) {
        setErrorPassword('')
      }
      if (writer && event.target.value && title && contents) {
        setBtnColor(true)
      } else {
        setBtnColor(false)
      }
  }

  function handleChangeTitle(event: ChangeEvent<HTMLInputElement>) {
      setTitle(event.target.value)
      if (event.target.value) {
        setErrorTitle('')
      }
      if (writer && password && event.target.value && contents) {
        setBtnColor(true)
      } else {
        setBtnColor(false)
      }
  }

  function handleChangeContents(event: ChangeEvent<HTMLTextAreaElement>) {
      setContents(event.target.value)
      if (event.target.value) {
        setErrorContents('')
      }
      if (writer && password && title && event.target.value) {
        setBtnColor(true)
      } else {
        setBtnColor(false)
      }
  }

  function handleChangeURL(event: ChangeEvent<HTMLInputElement>) {
    setSNSUrl(event.target.value)
  }

  const myUpdateBoardInput:IUpdateBoardInput = {
    title,
    contents,
    youtubeUrl: snsUrl
  }

  const myVariables:IMyVariables = {
      updateBoardInput: myUpdateBoardInput,
      password,
      boardId: String(router.query.boardId)
  }

  if (title) {
    myVariables.updateBoardInput.title = `[${topic}] `+title 
  } else {
    myVariables.updateBoardInput.title = data?.fetchBoard.title
  }

  if (contents) {
    myVariables.updateBoardInput.contents = contents 
  } else {
    myVariables.updateBoardInput.contents = data?.fetchBoard.contents
  }


  async function handleEditBoard() {
    
  // 비밀번호 검증
  if (!password) {
    setErrorPassword('비밀번호를 정확히 입력해 주세요.')
  } 
  try {
    const result2 = await updateBoard({ variables: myVariables })
    router.push(`/boards/${router.query.boardId}`)
    console.log(result2)
    alert('게시물 수정이 완료되었습니다.')
  } catch(error:any) {
    alert(`게시물 수정에 실패했습니다. ${error.message}`)
  }
      
    
  }


  async function handleClickBoard() {
    // 작성자 검증
    if (!writer) {
      setErrorWriter('이름을 정확히 입력해 주세요.')
    }

    // 비밀번호 검증
    if (!password) {
      setErrorPassword('비밀번호를 정확히 입력해 주세요.')
    } 
    // 제목 검증
    if (!title) {
      setErrorTitle('제목을 입력해 주세요.')
    } 
    // 내용 검증
    if (!contents) {
      setErrorContents('내용을 입력해 주세요.')
    } 
    // 모두 작성되었다면 작성정보전달
    if (writer && password && title && contents) {
      title = `[${topic}] `+ title
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer, password, title, contents, youtubeUrl: snsUrl
            } 
          }
        })
        console.log(result)
        alert('게시물 등록이 완료되었습니다.')
        router.push(`/boards/${result.data.createBoard._id}`)
      } catch(error:any) {
        alert(`게시물 등록에 실패했습니다. ${error.message}`)
      }
    }
  }

  return (
    <BoardNewUI data={data} isEdit={props.isEdit} selectedTopic={hanldeClickTopic} changedWriter={handleChangeWriter} changedPassword = {handleChangePassword} 
    changedTitle = {handleChangeTitle} changedContents = {handleChangeContents} errorWriter = {errorWriter} errorPassword = {errorPassword}
    errorTitle = {errorTitle} errorContents = {errorContents} sendBoard = {handleClickBoard} editBoard = {handleEditBoard} btnColor = {btnColor} changedUrl = {handleChangeURL} />
  )
}

export default BoardNew