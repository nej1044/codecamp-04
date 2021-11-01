import { Wrapper, MyLabel, WrapperHeader, HeaderForm, HeaderInput, 
  WrapperBody, BasicInput, ContentInput, Zipcode, ZipcodeSearch,
  PhotoUpload, Photo, MainsetForm, RadioInput, AdminBtn } from '../../../styles/new.js'

export default function Home() {
  // JavaScript

  return ( 
    // JSX
    // Fragment
    <>
      <head>
        <title>게시물 등록</title>
        <meta name="description" content="" />
      </head>
      
      <Wrapper>
        <h1>게시물 등록</h1>
        <WrapperHeader>
          <HeaderForm>
            <MyLabel>작성자</MyLabel>
            <HeaderInput type="text" placeholder="이름을 적어주세요" />
          </HeaderForm>
          <HeaderForm>
            <MyLabel>비밀번호</MyLabel>
            <HeaderInput type="password" placeholder="비밀번호를 입력해주세요." />
          </HeaderForm>
        </WrapperHeader>
        <WrapperBody>
          <MyLabel>제목</MyLabel>
          <BasicInput type="text" placeholder="제목을 작성해주세요" />
          <MyLabel>내용</MyLabel>
          <ContentInput type="text" placeholder="내용을 작성해주세요" />
          <MyLabel>주소</MyLabel>
            <form>
              <Zipcode type="text" placeholder="07250" disabled/>
              <ZipcodeSearch>우편번호 검색</ZipcodeSearch>
            </form>
          <BasicInput type="text"/>
          <BasicInput type="text"/>
          <MyLabel>유튜브</MyLabel>
          <BasicInput type="text" placeholder="링크를 복사해주세요" />
          <MyLabel>사진 첨부</MyLabel>
          <PhotoUpload>
            <Photo></Photo>
            <Photo></Photo>
            <Photo></Photo>
          </PhotoUpload>
          <MyLabel>메인 설정</MyLabel>
          <MainsetForm>
            <RadioInput type="radio" /> 유튜브
            <RadioInput type="radio" /> 사진
          </MainsetForm>
        </WrapperBody>
        <AdminBtn>등록하기</AdminBtn>
      </Wrapper>
    </>
  )
}