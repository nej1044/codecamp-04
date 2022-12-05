import styled from "@emotion/styled";
import { IMarketListStyled } from "./MarketList.types";

export const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
`;
export const ListHeader = styled.table`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  height: 150px;
  margin: 0 auto;
  font-size: 16px;
`;

export const SellingView = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 21px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 15px;
  border: none;
  background-color: none;
  :focus {
    outline: none;
  }
`;

export const HeaderForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  width: 30%;
  height: 50px;
  padding: 0 30px;
  border: 1px solid #c0c0c0;
  border-radius: 100px;
  transition: width 0.5s;

  :hover {
    border: 1px solid black;
  }
  :focus-within {
    border: 1px solid black;
    width: 40%;
    transition: width 0.5s;
  }
`;

export const ListBody = styled.section`
  width: 1300px;
  height: 800px;
  margin: 0 auto;
  overflow: auto;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.div`
  cursor: pointer;
  position: relative;
  width: 290px;
  height: 350px;
  margin-left: 33px;
  margin-bottom: 50px;
  float: left;
  opacity: ${(props: IMarketListStyled) => (props.isSoldout ? 0.5 : 1)};
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 50%;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50%;
  padding: 20px;
`;

export const Seller = styled.span`
  font-size: 14px;
  color: #9f9f9f;
`;

export const ItemName = styled.span`
  width: 100%;
  height: 25px;
  font-size: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-bottom: 10px;
`;

export const ItemPrice = styled.span`
  text-align: right;
  font-weight: 600;
  font-size: 20px;
  margin-top: 5px;
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
  padding: 0 80px;
  background-color: #f9f9f9;
  word-break: keep-all;
`;

export const FooterTitle = styled.span`
  font-size: 20px;
  font-weight: 500;
`;

export const FooterBtn = styled.button`
  width: 180px;
  height: 70px;
  color: black;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 500;
  background-color: #ffd301;
  word-break: keep-all;
  cursor: pointer;
  :hover {
    background-color: #f5c126;
  }
`;

export const KeyTitle = styled.span`
  color: black;
  background: ${(props: IMarketListStyled) =>
    props.isMatched ? "#ffd301" : "none"};
`;

export const Soldout = styled.span`
  position: absolute;
  top: 0;
  text-align: center;
  color: white;
  @media only screen and (max-width: 600px) {
    width: 130px;
    height: 100px;
    line-height: 100px;
    font-size: 20px;
  }
  @media only screen and (min-width: 600px) {
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
