// 설정파일
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { AppProps } from "next/dist/shared/lib/router/router";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalstyles";
import { createUploadLink } from "apollo-upload-client";
import { initializeApp } from "firebase/app";
import { createContext, useEffect, useState } from "react";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";

const firebaseConfig = {
  apiKey: "AIzaSyAgGowN_jw08K9sJnPTMfudEtyrb0tJNh4",
  authDomain: "codecamp-04.firebaseapp.com",
  projectId: "codecamp-04",
  storageBucket: "codecamp-04.appspot.com",
  messagingSenderId: "715011567530",
  appId: "1:715011567530:web:6b14c6c2572b44379bc5d3",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const GlobalContext = createContext<any>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const contextValue = {
    accessToken,
    setAccessToken,
    userInfo,
    setUserInfo,
    isOpen,
    setIsOpen,
  };

  useEffect(() => {
    // const accessToken = localStorage.getItem("accessToken") || "";
    // if (accessToken) setAccessToken(accessToken);
    if (localStorage.getItem("isLoggedIn")) getAccessToken(setAccessToken);
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 토큰 만료 에러 시
        if (err.extensions.code === "UNAUTHENTICATED") {
          // restore token
          // const newAccessToken = getAccessToken(setMyAccessToken);
          // 재요청
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${getAccessToken(setAccessToken)}`,
            },
          });
          return forward(operation);
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "http://backend07.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <GlobalContext.Provider value={contextValue}>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
