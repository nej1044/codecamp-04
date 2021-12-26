import ReactPlayer from "react-player";
import * as S from "./lecture.styles";
import { ILectureUI } from "./lecture.types";

const LectureUI = (props: ILectureUI) => {
  return (
    <S.Wrapper>
      <S.LectureHeader>
        <S.HeaderTitle>시작부터 실전까지</S.HeaderTitle>
        <S.HeaderSubtitle>
          좋은 강의를 다른 사람과 공유하고 함께 들어요.
        </S.HeaderSubtitle>
        <S.InputWrapper>
          <S.HeaderInput
            type="text"
            onChange={props.handleChangeUrl}
            value={props.url}
          />
          <S.HeaderBtn onClick={props.onClickUpload}>업로드</S.HeaderBtn>
        </S.InputWrapper>
      </S.LectureHeader>
      <S.LectureBody>
        {props.data.map((el: any, idx: any) => (
          <S.Contents key={props.dataId[idx]}>
            <S.ContentsHeader>
              <S.BtnWrapper>
                <S.ContentsBtn
                  onClick={props.onClickUpdate}
                  id={props.dataId[idx]}
                >
                  수정
                </S.ContentsBtn>
                <S.ContentsBtn
                  onClick={props.onClickDelete}
                  id={props.dataId[idx]}
                >
                  삭제
                </S.ContentsBtn>
              </S.BtnWrapper>
            </S.ContentsHeader>
            <ReactPlayer width="100%" height="100%" url={el.url}></ReactPlayer>
          </S.Contents>
        ))}
      </S.LectureBody>
    </S.Wrapper>
  );
};

export default LectureUI;
