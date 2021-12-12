import styled from "@emotion/styled";

export const CommentSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #f7f7f7;
`;
export const CommentWrapper = styled.div`
  width: 1200px;
  padding: 0px 102px 30px 102px;
`;

export const CommentHeader = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #8eb695;
  font-size: 24px;
  font-weight: 700;
  margin-top: 80px;
`;

export const CommentInputsSection = styled.section`
  width: 100%;
  padding: 20px 50px;
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
