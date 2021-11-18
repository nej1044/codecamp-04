import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactChild } from "react";
import Banner from "./banner";
import Footer from "./footer";
import Header from "./header";
import Navigation from "./navigation";

// const HIDDEN_HEADERS = [];

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
  // const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <Wrapper>
      <Header />
      {/* {!isHiddenHeader && <Header />} */}
      <Banner />
      <Navigation />
      <Body>{props.children}</Body>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
