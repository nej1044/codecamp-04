import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: white;
`;

const MenuContainer = styled.ul`
  display: flex;
  width: 1150px;
  height: 100%;
  margin: 0;
  list-style: none;
`;

const Menu = styled.li`
  height: 100%;
  font-size: 17px;
  font-weight: 400;
  margin-right: 30px;
  cursor: pointer;
  :hover {
    font-weight: 600;
    :after {
      display: block;
      content: "";
      width: 80%;
      margin: 18px auto;
      border-bottom: 5px solid #ffd301;
    }
  }
`;

const Navigation = () => {
  const router = useRouter();

  const moveComp = (comp: string) => () => {
    router.push(comp);
  };

  return (
    <Nav>
      <MenuContainer>
        <Menu style={{ fontWeight: 600 }} onClick={moveComp("/boards")}>
          커뮤니티
        </Menu>
        <Menu onClick={moveComp("/market")}>오픈 마켓</Menu>
        {/* <Menu onClick={moveComp("/news")}>실시간뉴스</Menu> */}
        {/* <Menu onClick={moveComp("/lecture")}>추천강의</Menu> */}
        {/* <Menu onClick={moveComp("/mypage")}>마이페이지</Menu> */}
      </MenuContainer>
    </Nav>
  );
};

export default Navigation;
