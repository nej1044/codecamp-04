import { useState } from "react"
import { Wrapper, Logo, Header, HeaderImg, UnderImg,
  Title, Body, Form, InputWrapper, Input, Error, Signin,
  BodyFooter, Option, Line, Footer, FooterImg } from '../../../styles/state-login'

function Login () {
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const [errorId, setErrorId] = useState('')
  const [errorPw, setErrorPw] = useState('')

  function handleChangeId(event) {
      const value = event.target.value
      setId(value)
  }

  function handleChangePw(event) {
      const value = event.target.value
      setPw(value)
  }

  function handleClickLogin() {
      // 아이디 검증
      if(id.includes('@') !== true|| id === '') {
          setErrorId('이메일 주소를 다시 확인해주세요.')
      } else {
        setErrorId('')
      }
      // 비밀번호 검증
      if(pw === "" || pw.length < 8) {
          setErrorPw('8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다.')
      } else {
        setErrorPw('')
      }
  }

    return (
      <>
      <head>
        <title>잇츠로드 로그인</title>
        <meta name="description" content="" />
      </head>

      <Wrapper>
        <Header>
          <Logo>
            <HeaderImg src="/images/eatsroad-header.png" />
            <UnderImg src="/images/eatsroad-logo.png" />
          </Logo>
          <Title>잇츠로드</Title>
        </Header>
        <Body>
          <Form>
            <InputWrapper>
              <Input type="text" onChange={handleChangeId} value={id}/>
              <img src="/images/delete.png" />
            </InputWrapper>
            <Error>{errorId}</Error>
          </Form>
          <Form>
            <InputWrapper>
              <Input type="password" onChange={handleChangePw} value={pw}/>
              <img src="/images/delete.png" />
            </InputWrapper>
            <Error>{errorPw}</Error>
          </Form>
          <Signin onClick={handleClickLogin}>로그인</Signin>
          <BodyFooter>
            <Option>이메일 찾기</Option>
            <Line></Line>
            <Option>비밀번호 찾기</Option>
            <Line></Line>
            <Option>회원가입</Option>
          </BodyFooter>
        </Body>
        <Footer>
          <FooterImg src="/images/kakao.png" />
          <span>카카오톡으로 로그인</span>
        </Footer>
      </Wrapper>
      
    </>
    )
}

export default Login