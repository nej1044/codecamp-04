import { Title, MyDiv, MyInput, MyLabel } from "../../styles/emotion.js";

export default function EmotionPage() {
  // JavaScript

  return (
    // JSX
    // Fragment
    // test
    <>
      <head>
        <title>Sign Up</title>
        <meta name="description" content="" />
      </head>
      <Title>로그인</Title>
      <MyDiv>
        <MyLabel>아이디</MyLabel>
        <MyInput type="text" />
        <MyLabel>비밀번호</MyLabel>
        <MyInput type="password" />
        <MyLabel>나의 이미지</MyLabel>
        <img src="/images/lotto.png" />
      </MyDiv>
    </>
  );
}
