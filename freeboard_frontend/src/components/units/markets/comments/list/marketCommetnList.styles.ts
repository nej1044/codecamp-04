import styled from "@emotion/styled";

export const CommentBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #f7f7f7;
  padding-bottom: 50px;
`;

export const Comment = styled.div`
  position: relative;
  width: 800px;
  border-left: 1px solid #8eb695;
  padding-bottom: 10px;
  padding-left: 30px;
  margin: 0 auto;
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
