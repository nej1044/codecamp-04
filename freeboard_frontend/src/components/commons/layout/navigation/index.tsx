import styled from "@emotion/styled";
import { useRouter } from "next/router";

const NavDiv = styled.section`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 0 300px;
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

  const inNews = () => {
    router.push("/news");
  };

  const inCommunity = () => {
    router.push("/boards");
  };

  const inLecture = () => {
    router.push("/lecture");
  };
  return (
    <NavDiv>
      <Menu onClick={inNews}>실시간뉴스</Menu>
      <Menu onClick={inCommunity}>커뮤니티</Menu>
      <Menu>아웃소싱마켓</Menu>
      <Menu onClick={inLecture}>추천강의</Menu>
      <Menu>마이페이지</Menu>
    </NavDiv>
  );
};

export default Navigation;
