import { useRouter } from 'next/router'
import { useMutation, gql } from '@apollo/client'
import { useState } from "react"
import {
  Wrapper,
  H1,
  WrapperHeader,
  TopicWrapper,
  TopicBtn,
  MyLabel,
  BodyHeader,
  HeaderForm,
  HeaderInput,
  WrapperBody,
  BodyForm,
  BasicInput,
  ContentInput,
  ZipcodeForm,
  Zipcode,
  ZipcodeSearch,
  PhotoUpload,
  Photo,
  AdminBtn,
  Error
} from '../../../styles/new.js'
import { isCompositeType } from 'graphql'

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput: $createBoardInput){
            _id
            writer
        }
    }
`

export default function Home() {
  // JavaScript
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

  function hanldeClickTopic(event) {
    
  }

  function handleChangeWriter(event) {
      const value = event.target.value
      setWriter(value)
      if (value !== '') {
        setErrorWriter('')
      }
  }

  function handleChangePassword(event) {
      const value = event.target.value
      setPassword(value)
      if (value !== '') {
        setErrorPassword('')
      }
  }

  function handleChangeTitle(event) {
      const value = event.target.value
      setTitle(value)
      if (value !== '') {
        setErrorTitle('')
      }
  }

  function handleChangeContents(event) {
      const value = event.target.value
      setContents(value)
      if (value !== '') {
        setErrorContents('')
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
        router.push(`/boards/detail/${result.data.createBoard._id}`)
      } catch(error) {
        alert(`상품 등록에 실패했습니다. ${error.message}`)
      }
    }
  }

  return ( 
    // JSX
    // Fragment
    <>
      
      <Wrapper>
        <H1>게시물 등록</H1>
        <WrapperHeader>
          <TopicWrapper>
            <TopicBtn onClick={hanldeClickTopic} type="button" name="topic" value="질문"/>
            <TopicBtn onClick={hanldeClickTopic} type="button" name="topic" value="자유주제"/>
            <TopicBtn onClick={hanldeClickTopic} type="button" name="topic" value="스터디"/>
          </TopicWrapper>
        </WrapperHeader>
        <WrapperBody>
          <BodyHeader>
            <HeaderForm>
              <MyLabel>작성자</MyLabel>
              <HeaderInput type="text" placeholder="이름을 적어주세요" onChange={handleChangeWriter} value={writer}/>
              <Error>{errorWriter}</Error>
            </HeaderForm>
            <HeaderForm>
              <MyLabel>비밀번호</MyLabel>
              <HeaderInput type="password" placeholder="비밀번호를 입력해주세요." onChange={handleChangePassword} value={password} />
              <Error>{errorPassword}</Error>
            </HeaderForm>
          </BodyHeader>
          <BodyForm>
            <MyLabel>제목</MyLabel>
            <BasicInput type="text" placeholder="제목을 작성해주세요" onChange={handleChangeTitle} value={title} />
            <Error>{errorTitle}</Error>
          </BodyForm>
          <BodyForm>
            <MyLabel>내용</MyLabel>
            <ContentInput type="text" placeholder="내용을 작성해주세요" onChange={handleChangeContents} value={contents} />
            <Error>{errorContents}</Error>
          </BodyForm>
          <ZipcodeForm>
            <MyLabel>주소</MyLabel>
              <form>
                <Zipcode type="text" placeholder="07250" disabled/>
                <ZipcodeSearch>우편번호 검색</ZipcodeSearch>
              </form>
            <BasicInput type="text" disabled/>
            <BasicInput type="text"/>
          </ZipcodeForm>
          <BodyForm>
            <MyLabel>SNS 주소</MyLabel>
            <BasicInput type="text" placeholder="링크를 복사해주세요" />
          </BodyForm>
          <BodyForm>
            <MyLabel>사진 첨부</MyLabel>
            <PhotoUpload>
              <Photo></Photo>
              <Photo></Photo>
              <Photo></Photo>
            </PhotoUpload>
          </BodyForm>
        </WrapperBody>
        <AdminBtn onClick={handleClickBoard}>등록하기</AdminBtn>
      </Wrapper>
    </>
  )
}
