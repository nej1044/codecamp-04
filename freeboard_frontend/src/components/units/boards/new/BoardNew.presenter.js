import * as S from './BoardNew.styles'

const BoardNewUI = (props) => {
  return(
    <>
      <S.Wrapper>
        <S.H1>게시물{props.isEdit ? "수정" : "등록"}</S.H1>
        <S.WrapperHeader>
          <S.TopicWrapper>
            <S.TopicBtn onClick={props.selectedTopic} type="button" name="topic" value="질문"/>
            <S.TopicBtn onClick={props.selectedTopic} type="button" name="topic" value="자유주제"/>
            <S.TopicBtn onClick={props.selectedTopic} type="button" name="topic" value="스터디"/>
          </S.TopicWrapper>
        </S.WrapperHeader>
        <S.WrapperBody>
          <S.BodyHeader>
            <S.HeaderForm>
              <S.MyLabel>작성자</S.MyLabel>
              {!props.isEdit &&<S.HeaderInput type="text" placeholder="이름을 적어주세요" onChange={props.changedWriter} />}
              {props.isEdit && <S.HeaderInput type="text" placeholder="이름을 적어주세요" onChange={props.changedWriter} defaultValue={props.data?.fetchBoard.writer}/>}
              <S.Error>{props.errorWriter}</S.Error>
            </S.HeaderForm>
            <S.HeaderForm>
              <S.MyLabel>비밀번호</S.MyLabel>
              <S.HeaderInput type="password" placeholder="비밀번호를 입력해주세요." onChange={props.changedPassword} />
              <S.Error>{props.errorPassword}</S.Error>
            </S.HeaderForm>
          </S.BodyHeader>
          <S.BodyForm>
            <S.MyLabel>제목</S.MyLabel>
            {!props.isEdit &&<S.BasicInput type="text" placeholder="제목을 작성해주세요" onChange={props.changedTitle} />}
            {props.isEdit &&<S.BasicInput type="text" placeholder="제목을 작성해주세요" onChange={props.changedTitle} defaultValue={props.data?.fetchBoard.title.split(' ')[1]} />}
            <S.Error>{props.errorTitle}</S.Error>
          </S.BodyForm>
          <S.BodyForm>
            <S.MyLabel>내용</S.MyLabel>
            {!props.isEdit &&<S.ContentInput type="text" placeholder="내용을 작성해주세요" onChange={props.changedContents} />}
            {props.isEdit &&<S.ContentInput type="text" placeholder="내용을 작성해주세요" onChange={props.changedContents} defaultValue={props.data?.fetchBoard.contents}/>}
            <S.Error>{props.errorContents}</S.Error>
          </S.BodyForm>
          <S.ZipcodeForm>
            <S.MyLabel>주소</S.MyLabel>
              <form>
                <S.Zipcode type="text" placeholder="07250" disabled/>
                <S.ZipcodeSearch>우편번호 검색</S.ZipcodeSearch>
              </form>
            <S.BasicInput type="text" disabled/>
            <S.BasicInput type="text"/>
          </S.ZipcodeForm>
          <S.BodyForm>
            <S.MyLabel>SNS 주소</S.MyLabel>
            {!props.isEdit &&<S.BasicInput type="text" placeholder="링크를 복사해주세요" onChange={props.changedUrl} />}
            {props.isEdit &&<S.BasicInput type="text" placeholder="링크를 복사해주세요" onChange={props.changedUrl} defaultValue={props.data?.fetchBoard.youtubeUrl}/>}
          </S.BodyForm>
          <S.BodyForm>
            <S.MyLabel>사진 첨부</S.MyLabel>
            <S.PhotoUpload>
              <S.Photo></S.Photo>
              <S.Photo></S.Photo>
              <S.Photo></S.Photo>
            </S.PhotoUpload>
          </S.BodyForm>
        </S.WrapperBody>
        {!props.isEdit && <S.AdminBtn onClick={props.sendBoard} btnColor = {props.btnColor}>등록하기</S.AdminBtn>}
        {props.isEdit && <S.AdminBtn onClick={props.editBoard} btnColor = {props.btnColor}>수정하기</S.AdminBtn>}
      </S.Wrapper>
    </>
  )
}

export default BoardNewUI