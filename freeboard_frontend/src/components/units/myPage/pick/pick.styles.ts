import styled from "@emotion/styled";
import { IPickStyled } from "./pick.types";

export const MyPageBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  @media only screen and (max-width: 600px) {
    margin-bottom: 15px;
    padding: 25px;
  }
  @media only screen and (min-width: 600px) {
    padding: 36px;
    margin-bottom: 22px;
  }
  @media only screen and (min-width: 996px) {
    padding: 50px;
    margin-bottom: 30px;
  }
`;

export const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 600px) {
    width: 175px;
  }
  @media only screen and (min-width: 600px) {
    width: 350px;
  }
`;

export const SoldTitle = styled.span`
  text-align: center;
  color: black;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    height: 25px;
    font-size: 15px;
  }
  @media only screen and (min-width: 600px) {
    height: 50px;
    font-size: 30px;
  }
`;

export const More = styled.span`
  color: gray;
  :hover {
    color: black;
  }
  cursor: pointer;
`;

export const ListBody = styled.section`
  width: 100%;
  margin: 0 auto;
  @media only screen and (max-width: 600px) {
    padding: 0;
  }
  @media only screen and (min-width: 600px) {
    padding: 20px 20px 0px 20px;
  }
  @media only screen and (min-width: 996px) {
    padding: 40px 40px 0px 40px;
  }
`;

export const ListFooter = styled.button`
  width: 100%;
  border: none;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    height: 25px;
    font-size: 10px;
  }
  @media only screen and (min-width: 600px) {
    height: 50px;
    font-size: 16px;
  }
`;

export const Item = styled.div`
  position: relative;
  float: left;
  opacity: ${(props: IPickStyled) => (props.isSoldout ? "0.5" : "1")};
  @media only screen and (max-width: 600px) {
    width: 130px;
    height: 210px;
    margin-bottom: 20px;
  }
  @media only screen and (min-width: 600px) {
    width: 260px;
    height: 355px;
    margin-bottom: 30px;
  }
  @media only screen and (min-width: 996px) {
    width: 280px;
    height: 400px;
    margin-bottom: 40px;
  }
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
    font-size: 15px;
  }
  @media only screen and (min-width: 600px) {
    width: 280px;
    height: 200px;
    line-height: 200px;
    font-size: 30px;
  }
`;

export const ItemImg = styled.img`
  width: 100%;
  @media only screen and (max-width: 600px) {
    height: 100px;
  }
  @media only screen and (min-width: 600px) {
    height: 200px;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media only screen and (max-width: 600px) {
    padding: 15px;
  }
  @media only screen and (min-width: 600px) {
    padding: 30px;
  }
`;

export const Seller = styled.span`
  color: #9f9f9f;
  padding-bottom: 10px;
`;

export const ItemName = styled.span`
  line-height: 100%;
  padding-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media only screen and (max-width: 600px) {
    min-height: 15px;
    font-size: 10px;
  }
  @media only screen and (min-width: 600px) {
    min-height: 30px;
    font-size: 20px;
  }
`;

export const ItemPrice = styled.span`
  text-align: right;
  font-weight: 600;
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 24px;
  }
`;

export const Picked = styled.span`
  text-align: right;
`;
