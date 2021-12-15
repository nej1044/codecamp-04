import styled from "@emotion/styled";
// import { ArrowLeftOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media only screen and (max-width: 600px) {
    padding: 20px;
  }
  @media only screen and (min-width: 600px) {
    padding: 100px;
  }
`;

export const DetailHeader = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const HeaderImg = styled.img`
  width: 50%;
  height: auto;
`;

export const HeaderText = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 50px;
  @media only screen and (max-width: 600px) {
    padding-left: 25px;
  }
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
  @media only screen and (max-width: 600px) {
    width: 50px;
    font-size: 12px;
  }
`;

export const TopText = styled.span`
  :hover {
    color: #9f9f9f;
  }
`;

export const Picked = styled.div`
  font-size: 20px;
  @media only screen and (max-width: 600px) {
    font-size: 10px;
  }
`;

export const HeaderTitle = styled.span`
  width: 100%;
  font-size: 32px;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

export const HeaderDetail = styled.div`
  width: 100%;
  height: 400px;
  padding: 30px;
  border: 1px solid black;
  @media only screen and (max-width: 600px) {
    height: 100px;
    padding: 10px;
  }
`;

export const Price = styled.span`
  font-size: 30px;
  font-weight: 600;
  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
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
  @media only screen and (max-width: 600px) {
    margin: 0;
    padding: 0;
    height: 50px;
    border: 0;
  }
`;

export const Remarks = styled.span`
  width: 100%;
  font-size: 20px;
  @media only screen and (max-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 600px) {
    display: block;
  }
`;

export const BuyBtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Cart = styled.button`
  width: 48%;
  height: 80px;
  color: #8eb696;
  font-size: 24px;
  border: 1px solid #8eb696;
  background-color: white;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    height: 40px;
    font-size: 12px;
  }
`;

export const Buy = styled.button`
  width: 48%;
  height: 80px;
  color: white;
  font-size: 24px;
  border: none;
  background-color: #8eb696;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    height: 40px;
    font-size: 12px;
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
`;

export const Title = styled.span`
  font-weight: 600;
  padding: 20px 0;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 32px;
  }
`;

export const HeaderContents = styled.span`
  width: 100%;
  margin-bottom: 100px;
  @media only screen and (max-width: 600px) {
    font-size: 11px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 22px;
  }
`;

export const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Photo = styled.img`
  max-width: 1000px;
  margin-bottom: 50px;
  @media only screen and (max-width: 600px) {
    width: 250px;
  }
`;
export const Tags = styled.span`
  width: 100%;
  font-size: 22px;
`;
