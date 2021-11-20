import * as S from "./Comment.styles";
import { ICommentWriteUIProps } from "./Comment.types";
import InfiniteScroll from "../../commons/infiniteScroll/InfiniteScroll.container";

const CommentWriteUI = (props: ICommentWriteUIProps) => {
  return (
    <S.CommentSection>
      <S.CommentWrapper>
        <S.CommentHeader>댓글</S.CommentHeader>
        <S.CommentInputsSection>
          <S.UserInputWrapper>
            <S.UserInput
              type="text"
              placeholder="작성자"
              name="writer"
              onChange={props.hanldeChangeInputs}
              value={props.inputs.writer}
            ></S.UserInput>
            <S.UserInput
              type="password"
              placeholder="비밀번호"
              name="password"
              value={props.inputs.password}
              onChange={props.hanldeChangeInputs}
            ></S.UserInput>
            <div>
              <S.CommentRate
                onChange={props.changeRating}
                value={props.rating}
              />
            </div>
          </S.UserInputWrapper>
          <S.TextAreaSection>
            <S.UserTextarea
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              onChange={props.hanldeChangeInputs}
              name="contents"
              maxLength={100}
              value={props.inputs.contents}
            ></S.UserTextarea>
            <S.InputFooter>
              <S.LettersNumber>
                {props.inputs.contents.length}/100
              </S.LettersNumber>
              <S.CommentAdmin onClick={props.createComment}>
                댓글등록
              </S.CommentAdmin>
            </S.InputFooter>
          </S.TextAreaSection>
        </S.CommentInputsSection>
        <S.CommentBody>
          <InfiniteScroll
            data={props.data}
            fetchMore={props.fetchMore}
            routerId={props.routerId}
            refetch={props.refetch}
            startPage={props.startPage}
          />
          {/* {props.data?.fetchBoardComments.map((el: any) => (
            <S.Comment key={el?._id}>
              <S.CommentImg src="/images/detail/ProfileImg.png" />
              <S.CommentInfo>
                <div>
                  <S.CommentUser>{el?.writer}</S.CommentUser>
                  <S.CommentDate>{getDate(el.createdAt)}</S.CommentDate>
                  <S.CommentRate
                    disabled={props.disabled}
                    value={el.rating}
                    onChange={props.changeEditRating}
                  />
                </div>
                <S.CommentFunc>
                  <S.FuncItem id={el?.contents} onClick={props.openEdit}>
                    수정
                  </S.FuncItem>
                  <S.FuncItem id={el?._id} onClick={props.deleteComment}>
                    삭제
                  </S.FuncItem>
                </S.CommentFunc>
              </S.CommentInfo>
              <S.EditTextArea>
                <S.UserTextarea
                  maxLength={100}
                  onChange={props.handleChangeEdit}
                  defaultValue={el?.contents}
                ></S.UserTextarea>
                <S.InputFooter>
                  <S.LettersNumber>
                    {props.editContents.length}/100
                  </S.LettersNumber>
                  <S.CommentAdmin id={el?._id} onClick={props.updateComment}>
                    댓글수정
                  </S.CommentAdmin>
                </S.InputFooter>
              </S.EditTextArea>
              <S.CommentContents>{el?.contents}</S.CommentContents>
            </S.Comment>
          ))} */}
        </S.CommentBody>
      </S.CommentWrapper>
    </S.CommentSection>
  );
};

export default CommentWriteUI;
