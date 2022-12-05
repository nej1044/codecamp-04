import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
  padding: 50px 0;
`;

export const DetailHeader = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderImg = styled.img`
  width: 48%;
  height: 450px;
  overflow: hidden;
  object-fit: cover;
`;

export const HeaderText = styled.div`
  display: flex;
  width: 48%;
  flex-direction: column;
  justify-content: space-between;
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
  width: 60px;
  font-size: 14px;
`;

export const TopText = styled.span`
  cursor: pointer;
  :hover {
    color: #9f9f9f;
  }
`;

export const Picked = styled.div`
  cursor: pointer;
  font-size: 16px;
`;

export const HeaderTitle = styled.span`
  width: 100%;
  font-size: 24px;
  font-weight: 600;
`;

export const HeaderDetail = styled.div`
  width: 100%;
  height: 80%;
  margin-top: 20px;
  padding: 30px;
  border: 1px solid black;
`;

export const Price = styled.span`
  font-weight: 600;
  font-size: 20px;
`;

export const BuyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  padding-top: 20px;
  height: 200px;
  border-top: 1px solid #9f9f9f;
`;

export const Remarks = styled.span`
  width: 100%;
  font-size: 16px;
`;

export const BuyBtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Cart = styled.button`
  width: 48%;
  color: black;
  border: 1px solid black;
  background-color: white;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  :hover {
    background-color: #f0f0f0;
  }
`;

export const Buy = styled.button`
  width: 48%;
  color: black;
  border: none;
  background-color: #ffd301;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  height: 70px;
  :hover {
    background-color: #f5c126;
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
  font-size: 24px;
`;

export const HeaderContents = styled.span`
  width: 100%;
  margin-bottom: 100px;
  font-size: 20px;
`;

export const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  img {
    max-width: 80%;
  }
`;

export const Photo = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 50px;
`;
export const Tags = styled.div`
  margin-top: 20px;
  font-size: 16px;
  span {
    padding: 8px 12px;
    border-radius: 20px;
    margin-right: 5px;
    background: #ffd301;
  }
`;
