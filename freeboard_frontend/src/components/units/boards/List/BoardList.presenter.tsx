import { getDate } from '../../../../commons/libraries/utils'
import * as S from './BoardList.styles'
import { IBoardListUIProps } from './BoardList.types'

const BoardListUI=(props: IBoardListUIProps)=> {
  return(
    <S.Wrapper>
      <S.BestWrapper>
        <h1>베스트 게시글</h1>
        <S.BestList>
          {props.second?.fetchBoardsOfTheBest.map((el:any)=>(
          <S.BestBoard id={el._id} onClick={props.getDetail}>
            <S.BestTitle>{el?.title}</S.BestTitle>
              <S.BestFooter>
                <S.BestUser>
                  <S.UserName>{el?.writer}</S.UserName>
                  <S.BestDate>Date: {getDate(el.createdAt)}</S.BestDate>
                </S.BestUser>
                <S.BestLike>
                  <S.BestImg src="/images/detail/Like.png" />
                  <S.BestNum>{el?.likeCount}</S.BestNum>
                </S.BestLike>
              </S.BestFooter>
            </S.BestBoard>
          ))}
        </S.BestList>
      </S.BestWrapper>
      <S.ListWrapper>
        <S.ListHeader>
          <S.HeaderForm>
            <S.Selected>
              <option value="" disabled selected>카테고리 선택</option>
              <option value="질문">질문</option>
              <option value="자유주제">자유주제</option>
              <option value="스터디">스터디</option>
            </S.Selected>
            <S.HeaderInput onChange={props.changeSearchValue} type="text" placeholder="궁금한 질문을 검색해보세요!"/>
            <S.HeaderBtn onClick={props.clickSearchValue}>검색</S.HeaderBtn> 
          </S.HeaderForm>
          <S.WriteBtn onClick={props.handleCreate}>게시물 등록하기</S.WriteBtn>        
        </S.ListHeader>
        <S.ListBody>
          {props.first?.fetchBoards.map((el:any)=>(
          <S.ListBoard id={el._id} onClick={props.getDetail}>
            <S.BoardTitle>{el?.title}</S.BoardTitle>
            <S.BoardContents>{el?.contents}</S.BoardContents>
            <S.BoardUser><S.BoardWriter>{el?.writer}</S.BoardWriter><S.BoardCreatedAt>{getDate(el.createdAt)}</S.BoardCreatedAt></S.BoardUser>
          </S.ListBoard>
          ))}
        </S.ListBody>
        <S.ListFooter>
          <span></span>
          {new Array(10).fill(1).map((_, index)=> props.startPage + index <= props.lastPage && (
            <S.Pages key={props.startPage + index}
            onClick={props.onClickPage}
            id={String(props.startPage + index)}
            current={props.startPage + index === props.current}>{props.startPage + index}</S.Pages>
          ))}
          <span></span>
        </S.ListFooter>
      </S.ListWrapper>
    </S.Wrapper>
  )
}

export default BoardListUI