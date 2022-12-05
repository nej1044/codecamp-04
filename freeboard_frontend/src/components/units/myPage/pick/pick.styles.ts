import styled from "@emotion/styled";
import { IPickStyled } from "./pick.types";

export const MyPageBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px;
  margin-bottom: 30px;
  background-color: white;
`;

export const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
`;

export const SoldTitle = styled.span`
  text-align: center;
  color: black;
  cursor: pointer;
  height: 50px;
  font-size: 20px;
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
  padding: 40px 40px 0px 40px;
`;

export const ListFooter = styled.button`
  width: 100%;
  border: none;
  cursor: pointer;
  height: 50px;
  font-size: 16px;
`;

export const Item = styled.div`
  position: relative;
  float: left;
  opacity: ${(props: IPickStyled) => (props.isSoldout ? "0.5" : "1")};
  width: 280px;
  height: 400px;
  margin-bottom: 40px;
`;

export const Soldout = styled.span`
  position: absolute;
  top: 0;
  text-align: center;
  color: white;
  width: 280px;
  height: 200px;
  line-height: 200px;
  font-size: 30px;
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 200px;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
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
