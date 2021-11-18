// 설정파일
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/dist/shared/lib/router/router";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://backend04.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
