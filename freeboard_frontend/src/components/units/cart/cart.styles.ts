import styled from "@emotion/styled";
import { HeartTwoTone } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 50px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderTitle = styled.span`
  font-size: 40px;
`;

export const Count = styled.span`
  width: 40px;
  height: 40px;
  color: white;
  font-size: 20px;
  background-color: red;
  text-align: center;
  border-radius: 50%;
  line-height: 40px;
`;

export const Body = styled.section`
  margin: 20px 0;
`;

export const BodyHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #9f9f9f;
  border-bottom: 1px solid #9f9f9f;
  padding: 20px;
`;

export const BodyTitle = styled.span`
  width: 20%;
  text-align: center;
`;

export const ProductTitle = styled.span`
  width: 40%;
  text-align: center;
`;

export const CartItem = styled.div`
  width: 100%;
  height: 250px;
  padding: 10px;
  border-bottom: 1px solid #9f9f9f;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductInfo = styled.span`
  width: 40%;
  height: 100%;
  font-size: 20px;
  line-height: 230px;
  cursor: pointer;
`;

export const ItemInfo = styled.span`
  width: 20%;
  height: 100%;
  font-size: 20px;
  text-align: center;
  line-height: 230px;
`;

export const ItemImg = styled.img`
  height: 220px;
  margin-right: 10px;
`;

export const InfoBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
  padding: 20px 0;
`;

export const InfoBtn = styled.button`
  width: 70%;
  height: 40px;
  margin-bottom: 10px;
  background-color: white;
  border: 1px solid #9f9f9f;
  border-radius: 10px;
  color: gray;
  font-size: 14px;
  font-weight: 600;
  line-height: 40px;
  cursor: pointer;
`;

export const InfoBtnBuy = styled.button`
  width: 70%;
  height: 40px;
  margin-bottom: 10px;
  background-color: white;
  border: 1px solid #8eb696;
  color: #8eb696;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  line-height: 40px;
  cursor: pointer;
`;

export const Heart = styled(HeartTwoTone)`
  margin-right: 5px;
`;
