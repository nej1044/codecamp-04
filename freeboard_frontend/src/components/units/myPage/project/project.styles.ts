import styled from "@emotion/styled";

export const MyPageBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
  padding: 50px;
  background-color: white;
`;

export const ProjectHeader = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SoldTitle = styled.span`
  height: 50px;
  font-size: 30px;
  border-bottom: ${(props) => (props.isBought ? "3px solid black" : "none")};
  text-align: center;
  color: ${(props) => (props.isBought ? "black" : "#9f9f9f")};
  cursor: pointer;
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
  padding: 40px 40px 0px 40px;
  margin: 0 auto;
`;

export const ListFooter = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

export const Item = styled.div`
  position: relative;
  width: 280px;
  height: 400px;
  margin-bottom: 40px;
  float: left;
  opacity: ${(props) => (props.isSoldout ? "0.5" : "1")};
`;

export const Soldout = styled.span`
  position: absolute;
  top: 0;
  width: 280px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  color: white;
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
  min-height: 30px;
  font-size: 20px;
  line-height: 100%;
  padding-bottom: 10px;
`;

export const ItemPrice = styled.span`
  text-align: right;
  font-size: 24px;
  font-weight: 600;
`;

export const Picked = styled.span`
  text-align: right;
`;
