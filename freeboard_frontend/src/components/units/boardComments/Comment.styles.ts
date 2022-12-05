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
  border-bottom: 1px solid black;
  font-size: 24px;
  font-weight: 700;
`;

export const CommentInputsSection = styled.section`
  width: 100%;
  padding: 20px 50px;
`;

export const UserInputWrapper = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const UserInput = styled.input`
  height: 40px;
  padding: 10px;
  border: none;
  :focus {
    outline: 2px solid black;
    border-radius: 3px;
  }
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
  position: relative;
  width: 100%;
`;

export const UserTextarea = styled.textarea`
  width: 100%;
  height: 130px;
  padding: 10px;
  border: none;
  font-family: Arial, Helvetica, sans-serif;
  :focus {
    outline: 2px solid black;
    border-radius: 3px;
  }
`;

export const InputFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  bottom: 6px;
`;

export const LettersNumber = styled.span`
  padding-left: 30px;
  width: 100px;
`;

export const CommentAdmin = styled.button`
  width: 100px;
  height: 35px;
  color: black;
  background-color: #ffd301;
  border: none;
`;
