import styled from "@emotion/styled";
import { useRouter } from "next/router";

const NavDiv = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  width: 100%;
  height: 100px;
  background-color: #8eb695;
  @media only screen and (max-width: 600px) {
    padding: 0;
  }
  @media only screen and (min-width: 600px) {
    padding: 0 50px;
  }
  @media only screen and (min-width: 768px) {
    padding: 0 50px;
  }
  @media only screen and (min-width: 996px) {
    padding: 0 100px;
  }
`;

const Menu = styled.div`
  width: 200px;
  height: 100%
  height: 50px;
  color: white;
  font-size: 25px;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 996px) {
    font-size: 25px;
  }
`;

const Navigation = () => {
  const router = useRouter();

  const moveComp = (comp: string) => () => {
    router.push(comp);
  };

  return (
    <NavDiv>
      <Menu onClick={moveComp("/news")}>실시간뉴스</Menu>
      <Menu onClick={moveComp("/boards")}>커뮤니티</Menu>
      <Menu onClick={moveComp("/market")}>아웃소싱마켓</Menu>
      <Menu onClick={moveComp("/lecture")}>추천강의</Menu>
      <Menu onClick={moveComp("/mypage")}>마이페이지</Menu>
    </NavDiv>
  );
};

export default Navigation;
