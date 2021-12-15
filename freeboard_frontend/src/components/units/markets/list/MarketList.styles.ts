import styled from "@emotion/styled";
import { IMarketListStyled } from "./MarketList.types";

export const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  @media only screen and (max-width: 600px) {
    padding: 55px;
  }
  @media only screen and (min-width: 600px) {
    padding: 55px;
  }
  @media only screen and (min-width: 768px) {
    padding: 55px 90px;
  }
`;
export const ListHeader = styled.table`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  font-size: 16px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 30px;
  }
  @media only screen and (min-width: 600px) {
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    padding: 100px;
  }
`;

export const SellingView = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 768px) {
    width: 160px;
    font-size: 15px;
  }
  @media only screen and (min-width: 768px) {
    width: 200px;
    font-size: 20px;
  }
`;

export const HeaderContents = styled.td`
  width: 200px;
  text-align: center;
  cursor: pointer;
  :hover {
    background-color: #f9f9f9;
  }
`;

export const SearchInput = styled.input`
  height: 40px;
  padding: 15px;
  border: none;
  border-radius: 5px 0px 0px 5px;
  background-color: #f5f5f5;
  :focus {
    outline: none;
  }
  @media only screen and (max-width: 600px) {
    width: 200px;
  }
  @media only screen and (min-width: 600px) {
    width: 200px;
  }
  @media only screen and (min-width: 768px) {
    width: 250px;
  }
  @media only screen and (min-width: 996px) {
    width: 500px;
  }
`;

export const SearchBtn = styled.button`
  width: 80px;
  height: 40px;
  border: none;
  border-radius: 0px 5px 5px 0px;
  color: white;
  background-color: #8eb696;
`;

export const ListBody = styled.section`
  width: 90%;
  height: 800px;
  overflow: auto;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const Item = styled.div`
  position: relative;
  margin-bottom: 50px;
  float: left;
  opacity: ${(props: IMarketListStyled) => (props.isSoldout ? 0.5 : 1)};
  @media only screen and (max-width: 768px) {
    width: 130px;
  }
  @media only screen and (min-width: 768px) {
    width: 240px;
  }
  @media only screen and (min-width: 996px) {
    width: 330px;
  }
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 200px;
  @media only screen and (max-width: 768px) {
    height: 100px;
  }
  @media only screen and (min-width: 768px) {
    height: 150px;
  }
  @media only screen and (min-width: 996px) {
    height: 200px;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`;

export const Seller = styled.span`
  color: #9f9f9f;
  padding-bottom: 10px;
`;

export const ItemName = styled.span`
  font-size: 20px;
  line-height: 100%;
  padding-bottom: 10px;
  @media only screen and (max-width: 600px) {
    font-size: 11px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 20px;
  }
`;

export const ItemPrice = styled.span`
  text-align: right;
  font-size: 24px;
  font-weight: 600;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 24px;
  }
`;

export const Picked = styled.span`
  text-align: right;
`;
export const Footer = styled.section`
  width: 100%;
  height: 80px;
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  background-color: #f9f9f9;
  word-break: keep-all;
  @media only screen and (max-width: 600px) {
    padding: 0 30px;
  }
`;

export const FooterTitle = styled.span`
  font-size: 20px;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

export const FooterBtn = styled.button`
  width: 180px;
  height: 70px;
  color: white;
  font-size: 22px;
  border: none;
  border-radius: 10px;
  background-color: #8eb696;
  word-break: keep-all;
  :hover {
    background-color: #8d9696;
  }
  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

export const KeyTitle = styled.span`
  color: ${(props: IMarketListStyled) =>
    props.isMatched ? "#8eb695" : "black"};
`;

export const Soldout = styled.span`
  position: absolute;
  top: 0;
  text-align: center;
  color: white;

  @media only screen and (max-width: 768px) {
    width: 130px;
    height: 100px;
    line-height: 100px;
    font-size: 20px;
  }
  @media only screen and (min-width: 768px) {
    width: 240px;
    height: 150px;
    line-height: 150px;
    font-size: 25px;
  }
  @media only screen and (min-width: 996px) {
    width: 330px;
    height: 200px;
    line-height: 200px;
    font-size: 30px;
  }
`;
