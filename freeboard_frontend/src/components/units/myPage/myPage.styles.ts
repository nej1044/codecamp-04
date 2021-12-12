import styled from "@emotion/styled";
import ModalUnstyled from "@mui/base/ModalUnstyled";

export const Wrapper = styled.div`
  width: 100%;
  padding: 100px;
  background-color: #f9f9f9;
`;

export const MyPageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 49%;
  height: 300px;
  padding: 50px;
  background-color: white;
`;

export const Transaction = styled.div`
  width: 100%;
  height: 300px;
  overflow: auto;
`;

export const TransHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  font-size: 16px;
`;

export const TransBasic = styled.span`
  width: 100px;
  color: black;
  text-align: center;
`;

export const TransContents = styled.span`
  width: 80px;
  color: ${(props) => (props.status ? "red" : "blue")};
  text-align: center;
`;

export const HeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  width: 49%;
  height: 300px;
  padding: 50px;
  background-color: white;
`;

export const CoinSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 100%;
  background-color: white;
`;

export const CoinTitle = styled.span`
  width: 120px;
  height: 50px;
  font-size: 30px;
  border-bottom: 3px solid black;
  text-align: center;
`;

export const CoinCountWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-right: 50px;
`;

export const PointAmount = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

export const CountTitle = styled.span`
  font-size: 20px;
`;

export const CoinBtn = styled.button`
  height: 70px;
  width: 250px;
  font-size: 20px;
  color: white;
  background-color: black;
`;

export const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: 100%;
  background-color: white;
`;

export const ProfileName = styled.span`
  font-size: 25px;
`;

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

export const Item = styled.div`
  position: relative;
  width: 280px;
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

export const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const ModalTitle = styled.span`
  font-size: 24px;
`;

export const ModalCount = styled.div`
  width: 100%;
  padding: 0 20px;
  border-bottom: 1px solid black;
  text-align: right;
`;

export const ModalInput = styled.input`
  height: 50px;
  margin-right: 20px;
  border: none;
  text-align: right;
  font-size: 20px;
  :focus {
    outline: none;
  }
`;

export const ModalText = styled.span`
  font-size: 20px;
`;

export const ModalBtn = styled.button`
  width: 100%;
  height: 60px;
  color: white;
  font-size: 20px;
  border: none;
  background-color: #8eb696;
`;

export const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

export const style = {
  width: 500,
  height: 300,
  bgcolor: "white",
  p: 5,
  px: 4,
};
