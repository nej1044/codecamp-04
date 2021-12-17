import styled from "@emotion/styled";

export const HeaderWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: white;
  @font-face {
    font-family: "Black Han";
    src: url("/fonts/BlackHanSans-Regular.ttf");
  }
  @media only screen and (max-width: 600px) {
    padding: 0 10px;
  }
  @media only screen and (min-width: 600px) {
    padding: 0 50px;
  }
  @media only screen and (min-width: 996px) {
    padding: 0 100px;
  }
`;

export const Logo = styled.span`
  display: flex;
  align-items: center;
  font-family: "Black Han";
  font-size: 40px;
  color: #8eb695;
  cursor: pointer;
`;

export const LogoTitle = styled.span`
  @media only screen and (max-width: 600px) {
    display: none;
    font-size: 30px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 40px;
    display: inline-block;
  }
  @media only screen and (min-width: 996px) {
    font-size: 40px;
    display: inline-block;
  }
`;

export const HeaderMenu = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 600px) {
    width: 250px;
  }
  @media only screen and (min-width: 600px) {
    width: 270px;
  }
  @media only screen and (min-width: 996px) {
    width: 290px;
  }
`;

export const UserInfo = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 600px) {
    min-width: 200px;
  }
  @media only screen and (min-width: 600px) {
    min-width: 250px;
  }
  @media only screen and (min-width: 996px) {
    min-width: 300px;
  }
`;
export const UserName = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin-right: 10px;
`;

export const UserText = styled.span`
  margin-right: 20px;
  @media only screen and (max-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 600px) {
    display: block;
  }
  @media only screen and (min-width: 996px) {
    display: block;
  }
`;

export const LoginBtn = styled.button`
  width: 100px;
  height: 40px;
  margin-right: 20px;
  border: 1px solid black;
  border-radius: 15px;
  background-color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  :hover {
    background-color: #8eb695;
    color: white;
    border: none;
  }
`;

export const modalStyle = {
  display: "flex",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  "@media only screen and (max-width: 600px)": { width: "90%" },
  "@media only screen and (min-width: 600px)": { width: "90%" },
  "@media only screen and (min-width: 996px)": { width: "55%" },
  bgcolor: "background.paper",
  borderRadius: 20,
  overflow: "hidden",
  boxShadow: 24,
  padding: 0,
};

export const HeroHeader = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 700px;
  padding: 50px;
  background-color: #8eb695;
  @media only screen and (max-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 996px) {
    display: flex;
  }
`;

export const HeaderImg = styled.img`
  width: 400px;
  filter: invert(100%);
`;

export const HeaderSubTitle = styled.h1`
  font-size: 21px;
  color: white;
`;

export const HeaderTitle = styled.h2`
  font-family: "Black Han";
  font-size: 70px;
  color: white;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 700px;
  padding: 100px 50px;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 996px) {
    width: 50%;
  }
`;

export const LoginInput = styled.input`
  width: 100%;
  height: 60px;
  padding: 10px;
  border: 1px solid #9f9f9f;
  border-radius: 10px;
  :focus {
    outline: none;
    border: 2px solid #8eb695;
  }
`;

export const WrapperBtn = styled.button`
  width: 100%;
  height: 60px;
  border: 1px solid #8eb695;
  border-radius: 10px;
  background-color: #8eb695;
  color: white;
  font-size: 20px;
  font-weight: 700;
`;

export const BodyFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SocialWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #9f9f9f;
`;

export const FooterBtn = styled.button`
  width: 100%;
  height: 60px;
  border: 1px solid #8eb695;
  border-radius: 10px;
  background-color: white;
  color: #8eb695;
  font-size: 20px;
  font-weight: 700;
  :hover {
    background-color: #f9f9f9;
  }
`;
