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
  font-size: 40px;
  color: #8eb695;
  cursor: pointer;
`;

export const SignUpBody = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 700px;
  border: 1px solid #9f9f9f;
  padding: 50px;
`;

export const BodyTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 30px;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BodySubTitle = styled.h3`
  font-size: 24px;
`;

export const BodyInput = styled.input`
  height: 70px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #9f9f9f;
  border-radius: 5px;
  :focus {
    outline: none;
    border: 2px solid #8eb695;
  }
  font-size: 18px;
`;

export const SignupBtn = styled.button`
  width: 100%;
  height: 70px;
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
  font-size: 24px;
`;
