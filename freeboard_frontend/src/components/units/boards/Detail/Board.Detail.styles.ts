import styled from "@emotion/styled";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListBtn = styled.button`
  position: fixed;
  left: 300px;
  top: 180px;
  width: 50px;
  height: 50px;
  border: 1px solid #8eb695;
  font-size: 30px;
  border-radius: 10px;
  background: white;
  :hover {
    background-color: #8eb695;
    color: white;
  }
`;

export const DetailSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 1200px;
  margin-top: 59px;
  padding: 80px 102px;
`;

export const DetailHeader = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #8eb695;
`;
export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
`;

export const UserInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
`;

export const ProfileText = styled.span`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

export const UserName = styled.p`
  margin: 0;
  padding: 0;
  font-size: 24px;
  font-weight: 500;
`;

export const UserDate = styled.p`
  margin: 0;
  padding: 0;
  color: #828282;
  font-size: 16px;
`;

export const UserMore = styled.div`
  display: flex;
  position: relative;
  width: 80px;
  justify-content: space-between;
`;
export const Address = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  width: 376px;
  height: 72px;
  position: absolute;
  right: 15px;
  bottom: 40px;
  padding: 8px 16px 16px 16px;
  z-index: 1;
  background-image: url("/images/detail/addressBox.png");
  color: white;
  font-size: 14px;
  text-align: right;
`;

export const DetailBody = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const BodyHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 80px 0 120px 0;
`;
export const BodyImg = styled.img`
  width: 100%;
  height: 480px;
  margin-bottom: 40px;
  object-fit: cover;
`;

export const DetailMoodlet = styled.div`
  display: flex;
  width: 142px;
  height: 51px;
  justify-content: space-between;
  align-items: center;
`;

export const DetailLike = styled.div`
  display: flex;
  width: 40px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const LikeNum = styled.p`
  margin: 0;
  height: 0;
  font-size: 18px;
  color: #ffd600;
`;

export const UnLikeNum = styled.p`
  margin: 0;
  height: 0;
  font-size: 18px;
  color: #828282;
`;

export const DetailBtnSection = styled.section`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-right: 50px;
`;

export const DetailBtn = styled.button`
  height: 45px;
  border: none;
  background: none;
  font-size: 16px;
  font-weight: 500;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    color: gray;
  }
`;
export const CommentSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #f2f2f2;
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

export const UserInputWrapper = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const UserInput = styled.input`
  height: 40px;
  padding: 10px;
  border: 1px solid #8eb695;
  :focus {
    outline: 2px solid #8eb695;
    border-radius: 3px;
  }
`;

export const TextAreaSection = styled.section`
  position: relative;
  width: 100%;
`;

export const EditTextArea = styled.section`
  display: none;
  position: relative;
  width: 100%;
`;

export const UserTextarea = styled.textarea`
  width: 100%;
  height: 130px;
  padding: 10px;
  border: 1px solid #8eb695;
  font-family: Arial, Helvetica, sans-serif;
  :focus {
    outline: 2px solid #8eb695;
    border-radius: 3px;
  }
`;

export const InputFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  bottom: 5px;
`;

export const LettersNumber = styled.span`
  padding-left: 30px;
  width: 100px;
`;

export const CommentAdmin = styled.button`
  width: 100px;
  height: 35px;
  color: white;
  background-color: #8eb695;
  border: 1px solid #8eb695;
`;

export const CommentBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 30px;
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
`;

export const CommentContents = styled.div`
  width: 100%;
  margin-bottom: 10px;
  word-break: break-all;
`;
