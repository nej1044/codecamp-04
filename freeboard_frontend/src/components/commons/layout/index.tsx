import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactChild } from "react";
import Banner from "./banner";
import Footer from "./footer";
import Header from "./header/header.container";
import Navigation from "./navigation";

const HIDE_BANNER = ["/signup"];

interface ILayoutProps {
  children: ReactChild;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Body = styled.section`
  width: 100%;
`;

const Layout = (props: ILayoutProps) => {
  const router = useRouter();
  const isHideBanner = HIDE_BANNER.includes(router.asPath);

  return (
    <Wrapper>
      <Header />
      {!isHideBanner && <Banner />}
      <Navigation />
      <Body>{props.children}</Body>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
