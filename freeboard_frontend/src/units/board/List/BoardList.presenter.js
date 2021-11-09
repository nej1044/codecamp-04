import { Wrapper, BestWrapper, BestList, BestTitle, BestFooter, BestBoard, BestUser,
  BestDate, BestLike, BestImg, BestNum, UserName, ListWrapper, ListHeader, HeaderForm, HeaderInput
  , HeaderBtn, WriteBtn, ListBody, ListBoard, BoardTitle, BoardContents, BoardUser, BoardWriter
, BoardCreatedAt, ListFooter, Pages } from './BoardList.styles'
 

const BoardListUI=(props)=> {
  return(
    <Wrapper>
      <BestWrapper>
        <h1>베스트 게시글</h1>
        <BestList>
          {props.second?.fetchBoardsOfTheBest.map((el)=>(
          <BestBoard>
            <BestTitle>{el?.title}</BestTitle>
              <BestFooter>
                <BestUser>
                  <UserName>{el?.writer}</UserName>
                  <BestDate>Date: {el?.createdAt.split('T')[0]}</BestDate>
                </BestUser>
                <BestLike>
                  <BestImg src="/images/detail/Like.png" />
                  <BestNum>{el?.likeCount}</BestNum>
                </BestLike>
              </BestFooter>
            </BestBoard>
          ))}
        </BestList>
      </BestWrapper>
      <ListWrapper>
        <ListHeader>
          <HeaderForm>
            <HeaderInput type="text" placeholder="궁금한 질문을 검색해보세요!"/>
            <HeaderBtn>검색</HeaderBtn> 
          </HeaderForm>
          <WriteBtn>게시물 등록하기</WriteBtn>        
        </ListHeader>
        <ListBody>
          {props.first?.fetchBoards.map((el)=>(
          <ListBoard>
            <BoardTitle>{el?.title}</BoardTitle>
            <BoardContents>{el?.contents}</BoardContents>
            <BoardUser><BoardWriter>{el?.writer}</BoardWriter><BoardCreatedAt>{el?.createdAt.split('T')[0]}</BoardCreatedAt></BoardUser>
          </ListBoard>
          ))}
        </ListBody>
        <ListFooter>
          <Pages onClick={props.hanldePage}>1</Pages>
          <Pages onClick={props.hanldePage}>2</Pages>
          <Pages onClick={props.hanldePage}>3</Pages>
          <Pages onClick={props.hanldePage}>4</Pages>
          <Pages onClick={props.hanldePage}>5</Pages>
          <Pages onClick={props.hanldePage}>6</Pages>
          <Pages onClick={props.hanldePage}>7</Pages>
          <Pages onClick={props.hanldePage}>8</Pages>
          <Pages onClick={props.hanldePage}>9</Pages>
          <Pages onClick={props.hanldePage}>10</Pages>
        </ListFooter>
      </ListWrapper>
    </Wrapper>
  )
}

export default BoardListUI