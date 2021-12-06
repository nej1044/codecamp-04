import styled from "@emotion/styled";
// import { ArrowLeftOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 100px;
`;

export const DetailHeader = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const HeaderImg = styled.img`
  width: 50%;
`;

export const HeaderText = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 50px;
`;

export const HeaderEdit = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80px;
  font-size: 17px;
`;

export const TopText = styled.span`
  :hover {
    color: #9f9f9f;
  }
`;

export const Picked = styled.div`
  font-size: 20px;
`;

export const HeaderTitle = styled.span`
  width: 100%;
  font-size: 32px;
`;

export const HeaderDetail = styled.div`
  width: 100%;
  height: 400px;
  padding: 30px;
  border: 1px solid black;
`;

export const Price = styled.span`
  font-size: 30px;
  font-weight: 600;
`;

export const BuyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 250px;
  border-top: 1px solid #9f9f9f;
  margin-top: 30px;
  padding-top: 30px;
`;

export const Remarks = styled.span`
  width: 100%;
  font-size: 20px;
`;

export const Buy = styled.button`
  width: 80%;
  height: 80px;
  color: white;
  font-size: 24px;
  border: none;
  border-radius: 10px;
  background-color: #8eb696;
  :hover {
    background-color: #8d9696;
  }
`;

export const DetailBody = styled.section`
  width: 100%;
  padding: 50px;
`;

export const BodyHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 50px;
  border-bottom: 1px solid #9f9f9f;
  margin-bottom: 50px;
`;

export const Title = styled.span`
  font-size: 32px;
  font-weight: 600;
  padding: 20px 0;
`;

export const HeaderContents = styled.span`
  width: 100%;
  font-size: 22px;
  margin-bottom: 100px;
`;

export const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Photo = styled.img`
  max-width: 1000px;
  margin-bottom: 50px;
`;
export const Tags = styled.span`
  width: 100%;
  font-size: 22px;
`;
