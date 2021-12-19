import styled from "@emotion/styled";
import { HeartTwoTone } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 100%;
  @media only screen and (max-width: 600px) {
    padding: 20px 50px;
  }
  @media only screen and (min-width: 600px) {
    padding: 60px 125px;
  }
  @media only screen and (min-width: 996px) {
    padding: 100px 200px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderTitle = styled.span`
  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 30px;
  }
  @media only screen and (min-width: 996px) {
    font-size: 40px;
  }
`;

export const Count = styled.span`
  color: white;
  background-color: red;
  text-align: center;
  border-radius: 50%;
  @media only screen and (max-width: 600px) {
    width: 20px;
    height: 20px;
    line-height: 20px;
    font-size: 10px;
  }
  @media only screen and (min-width: 600px) {
    width: 30px;
    height: 30px;
    line-height: 30px;
    font-size: 15px;
  }
  @media only screen and (min-width: 996px) {
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
  }
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
  :nth-child(3) {
    @media only screen and (max-width: 600px) {
      display: none;
    }
    @media only screen and (min-width: 600px) {
      display: block;
    }
    @media only screen and (min-width: 996px) {
      display: block;
    }
  }
`;

export const ProductTitle = styled.span`
  width: 40%;
  text-align: center;
`;

export const CartItem = styled.div`
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #9f9f9f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 600px) {
    font-size: 10px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 15px;
  }
  @media only screen and (min-width: 996px) {
    font-size: 20px;
  }
`;

export const ProductInfo = styled.span`
  width: 40%;
  height: 100%;
  line-height: 230px;
  cursor: pointer;
`;

export const ItemInfo = styled.span`
  width: 20%;
  height: 100%;
  text-align: center;
  line-height: 230px;
  :nth-child(3) {
    @media only screen and (max-width: 600px) {
      display: none;
    }
    @media only screen and (min-width: 600px) {
      display: block;
    }
    @media only screen and (min-width: 996px) {
      display: block;
    }
  }
`;

export const ItemImg = styled.img`
  width: 50%;
  height: auto;
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
  margin-bottom: 10px;
  background-color: white;
  border: 1px solid #9f9f9f;
  border-radius: 10px;
  color: gray;
  font-weight: 600;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    width: 90%;
    height: 32px;
    font-size: 10px;
    line-height: 32px;
  }
  @media only screen and (min-width: 600px) {
    width: 70%;
    height: 40px;
    font-size: 14px;
    line-height: 40px;
  }
  @media only screen and (min-width: 996px) {
    width: 70%;
    height: 40px;
    font-size: 14px;
    line-height: 40px;
  }
`;

export const InfoBtnBuy = styled.button`
  margin-bottom: 10px;
  background-color: white;
  border: 1px solid #8eb696;
  color: #8eb696;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    width: 90%;
    height: 32px;
    font-size: 10px;
    line-height: 32px;
  }
  @media only screen and (min-width: 600px) {
    width: 70%;
    height: 40px;
    font-size: 14px;
    line-height: 40px;
  }
  @media only screen and (min-width: 996px) {
    width: 70%;
    height: 40px;
    font-size: 14px;
    line-height: 40px;
  }
`;

export const Heart = styled(HeartTwoTone)`
  margin-right: 5px;
`;
