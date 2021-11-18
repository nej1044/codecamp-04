// 설정파일
import "antd/dist/antd.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/dist/shared/lib/router/router";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/types/generated/styles/globalstyles";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://example.codebootcamp.co.kr/graphql",
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
