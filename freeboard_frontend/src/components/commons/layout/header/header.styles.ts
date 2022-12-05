import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: white;
`;

export const ContentsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
`;

export const LogoTitle = styled.h1`
  margin: 0;
  font-family: "yg-jalnan";
  font-size: 20px;
  cursor: pointer;
`;

export const HeaderMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 700px;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 40px;
  padding: 20px;
  margin-right: 20px;
  border: 1px solid #e6e6e6;
  border-radius: 20px;
  transition: width 0.5s;
  :hover {
    border: 1px solid black;
  }
  :focus-within {
    border: 1px solid black;
    width: 350px;
    transition: width 0.5s;
  }
`;

export const SearchInput = styled.input`
  width: 220px;
  outline: none;
  border: none;
`;

export const HeaderList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 220px;
  margin: 0;
  list-style: none;
`;

export const LoginBtn = styled.li`
  height: 40px;
  padding: 0px 20px;
  line-height: 40px;
  border-radius: 5px;
  background-color: white;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  :hover {
    background-color: #e6e6e6;
    border: none;
  }
`;

export const SignUpBtn = styled(LoginBtn)`
  background-color: #ffd301;
  :hover {
    background-color: #f5c126;
  }
`;

export const UserInfo = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 300px;
`;
export const UserName = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin-right: 10px;
`;

export const UserText = styled.span`
  margin-right: 20px;
`;

export const modalStyle = {
  display: "flex",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "1000px",
  height: "600px",
  bgcolor: "background.paper",
  borderRadius: 20,
  overflow: "hidden",
  boxShadow: 24,
  padding: 0,
};

export const HeroHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 600px;
  background-color: #f5c126;
`;

export const HeaderSubTitle = styled.span`
  font-size: 26px;
  font-weight: 600;
`;

export const HeaderTitle = styled.span`
  font-size: 70px;
  font-weight: 900;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 600px;
  padding: 100px 50px;
`;

export const SectionTitle = styled.span`
  font-size: 24px;
  font-weight: 500;
`;

export const LoginInput = styled.input`
  width: 100%;
  height: 60px;
  padding: 10px;
  border: 1px solid #9f9f9f;
  border-radius: 10px;
  :hover,
  :focus {
    outline: none;
    border: 1px solid black;
  }
`;

export const WrapperBtn = styled.button`
  width: 100%;
  height: 60px;
  border: 1px solid #ffd301;
  border-radius: 10px;
  background-color: #ffd301;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;

  :hover {
    background-color: #f5c126;
  }
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
  border: 1px solid #3279ff;
  border-radius: 10px;
  background-color: white;
  color: #3279ff;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;

  :hover {
    background-color: #dbe7ff;
  }
`;
