import styled from "@emotion/styled";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import { IMyPageStyled } from "./myPage.types";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #f9f9f9;
  @media only screen and (max-width: 600px) {
    padding: 30px;
  }
  @media only screen and (min-width: 600px) {
    padding: 100px;
  }
`;

export const MyPageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media only screen and (max-width: 600px) {
    margin-bottom: 15px;
  }
  @media only screen and (min-width: 600px) {
    margin-bottom: 30px;
  }
`;

export const HeaderLeft = styled.div`
  flex-direction: column;
  justify-content: space-between;
  width: 49%;
  height: 300px;
  padding: 50px;
  background-color: white;
  @media only screen and (max-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 600px) {
    display: flex;
  }
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
  color: ${(props: IMyPageStyled) => (props.status ? "red" : "blue")};
  text-align: center;
`;

export const HeaderRight = styled.div`
  display: flex;
  justify-content: space-between;

  background-color: white;
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 150px;
    padding: 25px;
  }
  @media only screen and (min-width: 600px) {
    width: 49%;
    height: 300px;
    padding: 50px;
  }
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
  border-bottom: 3px solid black;
  text-align: center;
  @media only screen and (max-width: 600px) {
    width: 60px;
    height: 25px;
    font-size: 15px;
  }
  @media only screen and (min-width: 600px) {
    width: 120px;
    height: 50px;
    font-size: 30px;
  }
`;

export const CoinCountWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-right: 50px;
`;

export const PointAmount = styled.span`
  font-weight: 600;
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 24px;
  }
`;

export const CountTitle = styled.span`
  @media only screen and (max-width: 600px) {
    font-size: 10px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 20px;
  }
`;

export const CoinBtn = styled.button`
  color: white;
  background-color: black;
  @media only screen and (max-width: 600px) {
    height: 35px;
    width: 125px;
    font-size: 10px;
  }
  @media only screen and (min-width: 600px) {
    height: 70px;
    width: 250px;
    font-size: 20px;
  }
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

export const Password = styled.span`
  width: 100%;
  color: #9f9f9f;
  text-decoration: underline;
  text-align: right;
  @media only screen and (max-width: 600px) {
    font-size: 10px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 16px;
  }
`;

export const AvatarStyle = {
  margin: 0,
  "@media only screen and (max-width: 600px)": {
    width: 100,
    height: 100,
  },
  "@media only screen and (min-width: 600px)": {
    width: 150,
    height: 150,
  },
};

export const PasswordWrap = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const PasswordInput = styled.input`
  padding: 5px;
  border: 1px solid #9f9f9f;
  :focus {
    outline: none;
    border: 1px solid black;
  }
`;

export const PasswordBtn = styled.button`
  height: 40px;
  width: 50px;
  font-size: 14px;
  color: white;
  background-color: black;
`;

export const ProfileName = styled.span`
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 25px;
  }
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

export const ModalTitle = styled.h3`
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

export const PWWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PWInput = styled.input`
  width: 66%;
  border: 1px solid #9f9f9f;
  padding: 5px;
  :focus {
    outline: none;
    border: 3px solid #8eb696;
  }
`;
