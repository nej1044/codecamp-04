import styled from "@emotion/styled";
import { RocketTwoTone } from "@ant-design/icons";

const HeaderWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 50px;
  background-color: white;

  @font-face {
    font-family: "Black Han";
    src: url("/fonts/BlackHanSans-Regular.ttf");
  }
`;

const Logo = styled.span`
  font-family: "Black Han";
  font-size: 40px;
  color: #8eb695;
  cursor: pointer;
`;

const LoginBtn = styled.button`
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

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>
        <RocketTwoTone twoToneColor="#8eb695" />
        디벨로펌
      </Logo>
      <LoginBtn>로그인</LoginBtn>
    </HeaderWrapper>
  );
};

export default Header;
