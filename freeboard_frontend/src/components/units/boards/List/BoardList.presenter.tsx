import { getDate, getCommentsCount } from "../../../../commons/libraries/utils";
import Pagination from "../../../commons/pagination/pagination.container";
import * as S from "./BoardList.styles";
import { IBoardListUIProps } from "./BoardList.types";

const BoardListUI = (props: IBoardListUIProps) => {
  return (
    <>
      <S.SideBarWrapper>
        <S.SideBarTitle>디벨로펌과 함께 성장해보세요</S.SideBarTitle>
        <S.CategoryWrapper>
          <S.Category
            onClick={props.categorySelector}
            id="home"
            active={props.active === "home"}
          >
            홈
          </S.Category>
          <S.Category
            onClick={props.categorySelector}
            id="qna"
            active={props.active === "qna"}
          >
            질문
          </S.Category>
          <S.Category
            onClick={props.categorySelector}
            id="freetalk"
            active={props.active === "freetalk"}
          >
            자유주제
          </S.Category>
          <S.Category
            onClick={props.categorySelector}
            id="study"
            active={props.active === "study"}
          >
            스터디
          </S.Category>
        </S.CategoryWrapper>
      </S.SideBarWrapper>
      <S.Wrapper>
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
                  <S.CommentsCount>{getCommentsCount(el._id)}</S.CommentsCount>
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
    </>
  );
};

export default BoardListUI;
