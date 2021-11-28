import styled from "@emotion/styled";

export const HeaderWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 100px;
  background-color: white;

  @font-face {
    font-family: "Black Han";
    src: url("/fonts/BlackHanSans-Regular.ttf");
  }
`;

export const Logo = styled.span`
  font-family: "Black Han";
  font-size: 40px;
  color: #8eb695;
  cursor: pointer;
`;

export const HeaderMenu = styled.div`
  width: 220px;
  display: flex;
  justify-content: space-between;
`;
export const LoginBtn = styled.button`
  width: 100px;
  height: 40px;
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
  width: 1000,
  bgcolor: "background.paper",
  borderRadius: 20,
  overflow: "hidden",
  boxShadow: 24,
  padding: 0,
};

export const HeroHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  height: 700px;
  padding: 50px;
  background-color: #8eb695;
`;

export const HeaderImg = styled.img`
  width: 400px;
  filter: invert(100%);
`;

export const HeaderSubTitle = styled.h1`
  font-size: 26px;
  color: white;
`;

export const HeaderTitle = styled.h2`
  font-family: "Black Han";
  font-size: 100px;
  color: white;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;
  height: 700px;
  padding: 50px;
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
