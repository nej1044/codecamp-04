import styled from "@emotion/styled";
import { IPropsSignupStyled } from "./signup.types";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
`;

export const Logo = styled.span`
  @font-face {
    font-family: "Black Han";
    src: url("/fonts/BlackHanSans-Regular.ttf");
  }
  margin-bottom: 30px;
  font-family: "Black Han";
  color: #8eb695;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 40px;
  }
  @media only screen and (min-width: 996px) {
    font-size: 40px;
  }
`;

export const SignUpBody = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #9f9f9f;
  @media only screen and (max-width: 600px) {
    width: 300px;
    padding: 30px;
  }
  @media only screen and (min-width: 600px) {
    width: 700px;
    padding: 50px;
  }
  @media only screen and (min-width: 996px) {
    width: 700px;
    padding: 50px;
  }
`;

export const BodyTitle = styled.h2`
  margin-bottom: 30px;
  @media only screen and (max-width: 600px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 36px;
  }
  @media only screen and (min-width: 996px) {
    font-size: 36px;
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BodySubTitle = styled.h3`
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 24px;
  }
  @media only screen and (min-width: 996px) {
    font-size: 24px;
  }
`;

export const BodyInput = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #9f9f9f;
  border-radius: 5px;
  :focus {
    outline: none;
    border: 2px solid #8eb695;
  }
  @media only screen and (max-width: 600px) {
    height: 35px;
    font-size: 10px;
  }
  @media only screen and (min-width: 600px) {
    height: 70px;
    font-size: 18px;
  }
  @media only screen and (min-width: 996px) {
    height: 70px;
    font-size: 18px;
  }
`;

export const SignupBtn = styled.button`
  width: 100%;
  margin-top: 30px;
  border-radius: 5px;
  border: none;
  :focus {
    outline: none;
    border: 2px solid #8eb695;
  }
  background-color: ${(props: IPropsSignupStyled) =>
    props.btnColor === true ? "#8eb695" : "9f9f9f"};
  color: white;
  @media only screen and (max-width: 600px) {
    height: 35px;
    font-size: 12px;
  }
  @media only screen and (min-width: 600px) {
    height: 70px;
    font-size: 24px;
  }
  @media only screen and (min-width: 996px) {
    height: 70px;
    font-size: 24px;
  }
`;
