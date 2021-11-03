import { useState } from "react"

import { Wrapper, H1, MyLabel, WrapperHeader, HeaderForm, HeaderInput, 
  WrapperBody, BodyForm, BasicInput, ContentInput, ZipcodeForm, Zipcode, ZipcodeSearch,
  PhotoUpload, Photo, MainsetForm, RadioInput, AdminBtn, Error } from '../../../styles/new.js'

export default function Home() {
  // JavaScript
  const [user, setUser] = useState('')
  const [pw, setPw] = useState('')
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [errorUser, setErrorUser] = useState('')
  const [errorPw, setErrorPw] = useState('')
  const [errorTitle, setErrorTitle] = useState('')
  const [errorText, setErrorText] = useState('')

  function handleChangeUser(event) {
      const value = event.target.value
      setUser(value)
      if (value !== '') {
        setErrorUser('')
      }
  }

  function handleChangePw(event) {
      const value = event.target.value
      setPw(value)
      if (value !== '') {
        setErrorPw('')
      }
  }

  function handleChangeTitle(event) {
      const value = event.target.value
      setTitle(value)
      if (value !== '') {
        setErrorTitle('')
      }
  }

  function handleChangeText(event) {
      const value = event.target.value
      setText(value)
      if (value !== '') {
        setErrorText('')
      }
  }

  function handleClickLogin() {
    // 작성자 검증
    if (user === '') {
      setErrorUser('이름을 정확히 입력해 주세요.')
    }

    // 비밀번호 검증
    if (pw === '') {
      setErrorPw('비밀번호를 정확히 입력해 주세요.')
    } 
    // 제목 검증
    if (title === '') {
      setErrorTitle('제목을 입력해 주세요.')
    } 
    // 내용 검증
    if (text === '') {
      setErrorText('내용을 입력해 주세요.')
    } 
  }
  return ( 
    // JSX
    // Fragment
    <>
      <head>
        <title>게시물 등록</title>
        <meta name="description" content="" />
      </head>
      
      <Wrapper>
        <H1>게시물 등록</H1>
        <WrapperHeader>
          <HeaderForm>
            <MyLabel>작성자</MyLabel>
            <HeaderInput type="text" placeholder="이름을 적어주세요" onChange={handleChangeUser} value={user}/>
            <Error>{errorUser}</Error>
          </HeaderForm>
          <HeaderForm>
            <MyLabel>비밀번호</MyLabel>
            <HeaderInput type="password" placeholder="비밀번호를 입력해주세요." onChange={handleChangePw} value={pw} />
            <Error>{errorPw}</Error>
          </HeaderForm>
        </WrapperHeader>
        <WrapperBody>
          <BodyForm>
            <MyLabel>제목</MyLabel>
            <BasicInput type="text" placeholder="제목을 작성해주세요" onChange={handleChangeTitle} value={title} />
            <Error>{errorTitle}</Error>
          </BodyForm>
          <BodyForm>
            <MyLabel>내용</MyLabel>
            <ContentInput type="text" placeholder="내용을 작성해주세요" onChange={handleChangeText} value={text} />
            <Error>{errorText}</Error>
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
            <MyLabel>유튜브</MyLabel>
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
          <BodyForm>
            <MyLabel>메인 설정</MyLabel>
            <MainsetForm>
              <RadioInput type="radio" name="mainset"/> 유튜브
              <RadioInput type="radio" name="mainset"/> 사진
            </MainsetForm>
          </BodyForm>
        </WrapperBody>
        <AdminBtn onClick={handleClickLogin}>등록하기</AdminBtn>
      </Wrapper>
    </>
  )
}