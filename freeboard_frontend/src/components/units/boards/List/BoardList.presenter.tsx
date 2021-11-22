import { getDate } from "../../../../commons/libraries/utils";
import Pagination from "../../../commons/pagination/pagination.container";
import * as S from "./BoardList.styles";
import { IBoardListUIProps } from "./BoardList.types";

const BoardListUI = (props: IBoardListUIProps) => {
  return (
    <S.Wrapper>
      <S.BestWrapper>
        <h1>베스트 게시글</h1>
        <S.BestList>
          {props.second?.fetchBoardsOfTheBest.map((el: any) => (
            <S.BestBoard key={el._id} id={el._id} onClick={props.getDetail}>
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
            <S.HeaderInput
              onChange={props.changeSearchValue}
              type="text"
              placeholder="궁금한 내용을 검색해보세요!"
            />
            <S.HeaderBtn onClick={props.clickSearchValue}>검색</S.HeaderBtn>
          </S.HeaderForm>
          <S.BtnWrapper>
            <S.ResetBtn onClick={props.handleReset}>초기화</S.ResetBtn>
            <S.WriteBtn onClick={props.handleCreate}>
              게시물 등록하기
            </S.WriteBtn>
          </S.BtnWrapper>
        </S.ListHeader>
        <S.ListBody>
          {props.first?.fetchBoards.map((el: any) => (
            <S.ListBoard key={el._id} id={el._id} onClick={props.getDetail}>
              <S.BoardWrapper>
                <S.BoardTitle>{el?.title}</S.BoardTitle>
                <S.BoardContents>{el?.contents}</S.BoardContents>
                <S.BoardUser>
                  <S.BoardWriter>{el?.writer}</S.BoardWriter>
                  <S.BoardCreatedAt>{getDate(el.createdAt)}</S.BoardCreatedAt>
                </S.BoardUser>
              </S.BoardWrapper>
              <S.ListComment>
                {/* <span>{props.fetchComments?.fetchBoardComments.length}</span> */}
                <span>0</span>
                <span>댓글</span>
              </S.ListComment>
            </S.ListBoard>
          ))}
        </S.ListBody>
        <S.ListFooter>
          <Pagination
            refetch={props.refetch}
            count={props.count}
            startPage={props.startPage}
            setStartPage={props.setStartPage}
            current={props.current}
            setCurrent={props.setCurrent}
          />
        </S.ListFooter>
      </S.ListWrapper>
    </S.Wrapper>
  );
};

export default BoardListUI;
