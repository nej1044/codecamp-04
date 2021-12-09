import styled from "@emotion/styled";
import { Rate } from "antd";

export const CommentSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #f7f7f7;
`;
export const CommentWrapper = styled.div`
  width: 100%;
  width: 1200px;
  padding: 80px 102px;
`;

export const CommentHeader = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #8eb695;
  font-size: 24px;
  font-weight: 700;
`;

export const CommentInputsSection = styled.section`
  width: 100%;
  padding: 20px 50px;
`;

export const CommentBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 30px;
`;

export const CommentRate = styled(Rate)`
  font-size: 16px;
`;

export const TextAreaSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 180px;
  padding: 20px;
  background-color: white;
  outline: 2px solid #8eb695;
  border-radius: 3px;
`;

export const UserTextarea = styled.textarea`
  width: 100%;
  height: 80px;
  border: none;
  resize: none;
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
  color: #8eb696;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Comment = styled.div`
  position: relative;
  width: 800px;
  border-left: 1px solid #8eb695;
  padding-left: 30px;
`;

export const CommentImg = styled.img`
  position: absolute;
  top: -15px;
  left: -25px;
  background-color: white;
  border-radius: 50px;
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
  font-size: 16px;
  margin-right: 10px;
`;

export const CommentContents = styled.div`
  width: 100%;
  min-height: 20px;
  margin-bottom: 10px;
  word-break: break-all;
`;

export const EditTextArea = styled.div`
  display: none;
  position: relative;
  width: 100%;
`;

export const LettersNumber = styled.span`
  padding-left: 30px;
  width: 100px;
`;
