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
} from './BoardNew.styles'

const BoardNewUI = (props) => {
  return(
    <>
      <Wrapper>
        <H1>게시물 등록</H1>
        <WrapperHeader>
          <TopicWrapper>
            <TopicBtn onClick={props.selectedTopic} type="button" name="topic" value="질문"/>
            <TopicBtn onClick={props.selectedTopic} type="button" name="topic" value="자유주제"/>
            <TopicBtn onClick={props.selectedTopic} type="button" name="topic" value="스터디"/>
          </TopicWrapper>
        </WrapperHeader>
        <WrapperBody>
          <BodyHeader>
            <HeaderForm>
              <MyLabel>작성자</MyLabel>
              <HeaderInput type="text" placeholder="이름을 적어주세요" onChange={props.changedWriter}/>
              <Error>{props.errorWriter}</Error>
            </HeaderForm>
            <HeaderForm>
              <MyLabel>비밀번호</MyLabel>
              <HeaderInput type="password" placeholder="비밀번호를 입력해주세요." onChange={props.changedPassword} />
              <Error>{props.errorPassword}</Error>
            </HeaderForm>
          </BodyHeader>
          <BodyForm>
            <MyLabel>제목</MyLabel>
            <BasicInput type="text" placeholder="제목을 작성해주세요" onChange={props.changedTitle} />
            <Error>{props.errorTitle}</Error>
          </BodyForm>
          <BodyForm>
            <MyLabel>내용</MyLabel>
            <ContentInput type="text" placeholder="내용을 작성해주세요" onChange={props.changedContents} />
            <Error>{props.errorContents}</Error>
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
            <BasicInput type="text" placeholder="링크를 복사해주세요" onChange={props.changedUrl} />
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
        <AdminBtn onClick={props.sendBoard} btnColor = {props.btnColor}>등록하기</AdminBtn>
      </Wrapper>
    </>
  )
}

export default BoardNewUI