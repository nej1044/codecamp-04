import styled from "@emotion/styled";
import { useRouter } from "next/router";

const NavDiv = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 0 400px;
  background-color: #8eb695;
`;

const Menu = styled.div`
  width: 200px;
  height: 50px;
  color: white;
  font-size: 25px;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
`;

const Navigation = () => {
  const router = useRouter();

  const inCommunity = () => {
    router.push("/boards");
  };
  return (
    <NavDiv>
      <Menu onClick={inCommunity}>커뮤니티</Menu>
      <Menu>아웃소싱마켓</Menu>
      <Menu>마이페이지</Menu>
    </NavDiv>
  );
};

export default Navigation;
