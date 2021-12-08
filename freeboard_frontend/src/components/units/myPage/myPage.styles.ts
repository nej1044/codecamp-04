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
`;

export const HeaderRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
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

export const CoinTitle = styled.h2`
  width: 120px;
  font-size: 30px;
  border-bottom: 3px solid black;
  text-align: center;
`;

export const CoinCountWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
