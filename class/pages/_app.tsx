// 설정파일
import "antd/dist/antd.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

import * as Sentry from "@sentry/nextjs";
import { AppProps } from "next/dist/shared/lib/router/router";
// import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalstyles";
import { createUploadLink } from "apollo-upload-client";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createContext, useEffect, useState } from "react";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";
// import Head from "next/head";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

Sentry.init({
  dsn: "https://79a10db5ceca46e9a31c7a09062cf2bd@o1091876.ingest.sentry.io/6109519",
});
function MyApp({ Component, pageProps }: AppProps) {
  const [myAccessToken, setMyAccessToken] = useState("");
  const [myUserInfo, setMyUserInfo] = useState({});
  const myValue = {
    accessToken: myAccessToken,
    setAccessToken: setMyAccessToken,
    userInfo: myUserInfo,
    setUserInfo: setMyUserInfo,
  };

  // if (typeof window !== "undefined")
  // if (process.browser) {}

  useEffect(() => {
    // const accessToken = localStorage.getItem("accessToken") || "";
    // if (accessToken) setMyAccessToken(accessToken);
    if (localStorage.getItem("isLoggedIn")) getAccessToken(setMyAccessToken);
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
              authorization: `Bearer ${getAccessToken(setMyAccessToken)}`,
            },
          });

          return forward(operation);
        }
      }
    }
  });

  const uploadlLink = createUploadLink({
    uri: "https://backend04.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${myAccessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadlLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
    // headers: myAccessToken,
  });

  return (
    <>
      {/* <Head> 모든 페이지에서 카카오맵 다운로드 받으므로 비효율적!!!
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=d4229cbd5327d5a024d3ab1a7e618796"
        ></script>
      </Head> */}
      <GlobalContext.Provider value={myValue}>
        <ApolloProvider client={client}>
          <Global styles={globalStyles} />
          {/* <Layout> */}
          <Component {...pageProps} />
          {/* </Layout> */}
        </ApolloProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default MyApp;
