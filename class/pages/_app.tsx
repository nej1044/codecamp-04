// 설정파일
import "antd/dist/antd.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { AppProps } from "next/dist/shared/lib/router/router";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalstyles";
import { createUploadLink } from "apollo-upload-client";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createContext, useState } from "react";
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

function MyApp({ Component, pageProps }: AppProps) {
  const [myAccessToken, setMyAccessToken] = useState("");
  const [myUserInfo, setMyUserInfo] = useState({});
  const myValue = {
    accessToken: myAccessToken,
    setAccessToken: setMyAccessToken,
    userInfo: myUserInfo,
    setUserInfo: setMyUserInfo,
  };

  const uploadlLink = createUploadLink({
    uri: "http://backend04.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${myAccessToken}` },
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadlLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
    // headers: myAccessToken,
  });

  return (
    <GlobalContext.Provider value={myValue}>
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
