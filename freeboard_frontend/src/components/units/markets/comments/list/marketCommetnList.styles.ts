import styled from "@emotion/styled";

export const CommentBody = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: #f7f7f7;
  @media only screen and (max-width: 600px) {
    padding: ${(props) =>
      props.isEdit || props.isAnswer || props.isAnswerEdit
        ? "20px 0"
        : "10px 20px"};
  }
  @media only screen and (min-width: 600px) {
    padding: ${(props) =>
      props.isEdit || props.isAnswer || props.isAnswerEdit
        ? "20px 0"
        : "0px 102px 30px 102px"};
  }
`;

export const Comment = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 20px;
  padding-left: 30px;
  margin: 0 auto;
`;

export const CommentImg = styled.img`
  position: absolute;
  background-color: white;
  border-radius: 50px;
  @media only screen and (max-width: 600px) {
    width: 36px;
    top: -5px;
    left: -15px;
  }
  @media only screen and (min-width: 600px) {
    width: 48px;
    top: -15px;
    left: -25px;
  }
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
`;

export const Answer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 20px;
  padding-left: 30px;
  border-left: 1px solid #8eb696;
`;

export const AnswerImg = styled.img`
  position: absolute;

  background-color: white;
  border-radius: 50px;
  @media only screen and (max-width: 600px) {
    width: 36px;
    top: -5px;
    left: -20px;
  }
  @media only screen and (min-width: 600px) {
    width: 48px;
    top: -10px;
    left: -25px;
  }
`;
