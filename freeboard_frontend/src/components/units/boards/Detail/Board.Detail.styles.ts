import styled from "@emotion/styled";
import { ArrowLeftOutlined } from "@ant-design/icons";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListBtn = styled(ArrowLeftOutlined)`
  position: fixed;
  left: 100px;
  bottom: 400px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  border: 1px solid #8eb695;
  font-size: 20px;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 80px 0 120px 0;
`;
export const BodyImg = styled.img`
  margin: 0 auto;
  margin-bottom: 40px;
`;

export const BodyContents = styled.span`
  width: 100%;
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
  cursor: pointer;
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
