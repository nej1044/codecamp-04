import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactChild } from "react";
import Banner from "./banner";
import Footer from "./footer";
import Header from "./header";
import Navigation from "./navigation";

const HIDDEN_HEADERS = ["/12-05-modal-address-state-prev", "1", "2"];
interface ILayoutProps {
  children: ReactChild;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: brown;
`;

const BodyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Body = styled.section`
  width: 100%;
  height: 700px;
`;

const SideBar = styled.div`
  width: 500px;
  height: 700px;
  background-color: whitesmoke;
`;

const Layout = (props: ILayoutProps) => {
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <Wrapper>
      {!isHiddenHeader && <Header />}
      <Banner />
      <Navigation />
      <BodyWrapper>
        <SideBar>사이드바영역입니다.</SideBar>
        <Body>{props.children}</Body>
      </BodyWrapper>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
