import styled from "@emotion/styled";
import { IMarketCommentListStyled } from "./marketComment.List.types";

export const CommentBody = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: #f7f7f7;
  padding: ${(props: IMarketCommentListStyled) =>
    props.isEdit || props.isAnswer || props.isAnswerEdit
      ? "20px 0"
      : "0px 102px 30px 102px"};
`;

export const Comment = styled.div`
  width: 1200px;
  position: relative;
  padding-bottom: 20px;
  padding-left: 120px;
  padding-right: 120px;
  margin: 0 auto;
`;

export const CommentImg = styled.div`
  position: absolute;
  font-size: 20px;
  background-color: #ffd301;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  top: -10px;
  left: 60px;
  text-align: center;
  line-height: 42px;
  font-weight: 600;
`;

export const CommentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

export const CommentFunc = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70px;
`;

export const FuncItem = styled.span`
  font-size: 14px;
  cursor: pointer;
  :hover {
    color: gray;
  }
`;

export const CommentUser = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin-right: 20px;
`;

export const CommentDate = styled.span`
  color: gray;
  margin-right: 10px;
`;

export const CommentAns = styled.span`
  cursor: pointer;
`;

export const CommentContents = styled.div`
  width: 100%;
  min-height: 20px;
  margin-bottom: 10px;
  word-break: break-all;
`;

export const CommentFooter = styled.div`
  margin-bottom: 20px;
  span {
    cursor: pointer;
  }
`;

export const Answer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 20px;
  padding-left: 30px;
  border-left: 1px solid #ffd301;
`;

export const AnswerImg = styled.div`
  position: absolute;
  width: 42px;
  height: 42px;
  line-height: 42px;
  top: -10px;
  left: -22px;
  background-color: white;
  border-radius: 50px;
  text-align: center;
  font-size: 20px;
  background-color: #ffd301;
  border-radius: 50%;
  font-weight: 600;
`;
