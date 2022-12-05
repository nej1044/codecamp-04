import styled from "@emotion/styled";
import { IMarketCommentStyled } from "./marketComment.types";

export const CommentSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #f7f7f7;
`;

export const CommentWrapper = styled.div`
  width: 1200px;
  padding: ${(props: IMarketCommentStyled) =>
    props.isEdit || props.isAnswer || props.isAnswerEdit
      ? "20px 0"
      : "0px 102px 30px 102px"};
`;

export const CommentHeader = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid black;
  font-weight: 700;
  font-size: 24px;
  margin-top: 80px;
`;

export const CommentInputsSection = styled.section`
  width: 100%;
  padding: ${(props: IMarketCommentStyled) =>
    props.isAnswer || props.isAnswerEdit ? "0" : "20px 50px"};
`;

export const TextAreaSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  background-color: white;
  outline: 2px solid black;
  border-radius: 3px;
`;

export const UserTextarea = styled.textarea`
  width: 100%;
  height: 80px;
  font-size: 14px;
  border: none;
  resize: none;
  margin-top: 10px;
  :focus {
    outline: none;
  }
`;

export const InputFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const CommentAdmin = styled.button`
  width: 100px;
  height: 35px;
  color: black;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
