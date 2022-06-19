import styled from "@emotion/styled";
import { IPropsSignupStyled } from "./signup.types";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 80px;
`;

export const Logo = styled.h1`
  margin-bottom: 30px;
  font-family: "yg-jalnan";
  cursor: pointer;
  font-size: 24px;
`;

export const SignUpBody = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e6e6e6;
  width: 540px;
  padding: 50px;
`;

export const BodyTitle = styled.h2`
  margin-bottom: 20px;
  color: #303441;
  font-size: 30px;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BodySubTitle = styled.h3`
  margin-top: 10px;
  font-size: 18px;
  font-weight: 400;
  :after {
    width: 5px;
    content: "*";
    color: rgb(255, 144, 98);
  }
`;

export const BodyInput = styled.input`
  height: 60px;
  margin-bottom: 10px;
  padding: 20px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  font-size: 16px;
  :focus,
  :hover {
    outline: none;
    border: 1px solid #304441;
  }
`;

export const SignupBtn = styled.input`
  width: 100%;
  height: 60px;
  margin-top: 30px;
  border-radius: 5px;
  border: none;
  color: ${(props: IPropsSignupStyled) =>
    props.btnColor === true ? "#9A9BA7" : "black"};
  font-size: 20px;
  font-weight: 500;
  background-color: ${(props: IPropsSignupStyled) =>
    props.btnColor === true ? "#e4e5ed" : "#ffd301"};
  :focus,
  :hover {
    outline: none;
    border: 1px solid
      ${(props: IPropsSignupStyled) =>
        props.btnColor === true ? "#e4e5ed" : "#f5c126"};
    background-color: ${(props: IPropsSignupStyled) =>
      props.btnColor === true ? "#e4e5ed" : "#f5c126"};
  }
`;
