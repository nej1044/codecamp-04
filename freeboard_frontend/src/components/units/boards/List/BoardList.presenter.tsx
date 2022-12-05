import { getDate } from "../../../../commons/libraries/utils";
import Pagination from "../../../commons/pagination/pagination.container";
import * as S from "./BoardList.styles";
import { IBoardListUIProps } from "./BoardList.types";
import { CommentsCount } from "../../../../commons/libraries/CommentsCount";
import { v4 as uuid4 } from "uuid";
import { SearchOutlined } from "@ant-design/icons";

const BoardListUI = (props: IBoardListUIProps) => {
  return (
    <>
      <S.Wrapper>
        {/* <S.SideBarWrapper>
          <S.SideBarTitle>코드캠프와 함께 성장해보세요</S.SideBarTitle>
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
        </S.SideBarWrapper> */}
        <S.ListWrapper>
          <S.ListHeader>
            <S.BtnWrapper>
            <S.HeaderForm>
                <SearchOutlined />
                <S.HeaderInput
                  onChange={props.changeSearchValue}
                  type="text"
                  placeholder="커뮤니티 내에서 검색해보세요"
                />
                {/* <S.HeaderBtn onClick={props.clickSearchValue}>검색</S.HeaderBtn> */}
              </S.HeaderForm>
              <S.WriteBtn onClick={props.handleCreate}>작성하기</S.WriteBtn>
            </S.BtnWrapper>
          </S.ListHeader>
          <S.ListBody>
            {props.first?.fetchBoards.map((el: any) => (
              <S.ListBoard key={el._id} id={el._id} onClick={props.getDetail}>
                <S.BoardWrapper>
                  <S.BoardTitle>
                    {el?.title
                      .replaceAll(
                        props.confirmSearch,
                        `%^&${props.confirmSearch}%^&`
                      )
                      .split("%^&")
                      .map((el: any) => (
                        <S.KeyTitle
                          key={uuid4()}
                          isMatched={el === props.confirmSearch}
                        >
                          {el}
                        </S.KeyTitle>
                      ))}
                  </S.BoardTitle>
                  <S.BoardContents>{el?.contents}</S.BoardContents>
                  <S.BoardUser>
                    <span>{el?.writer}</span>
                    <span>{getDate(el.createdAt)}</span>
                  </S.BoardUser>
                </S.BoardWrapper>
                <S.ListComment>
                  <S.CommentsCount>
                    {<CommentsCount boardId={el._id} />}
                  </S.CommentsCount>
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
        <S.SideBarWrapper></S.SideBarWrapper>
      </S.Wrapper>
    </>
  );
};

export default BoardListUI;
