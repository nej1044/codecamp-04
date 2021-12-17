import styled from "styled-components";

export const Wrapper = styled.form``;

export const WriteWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  @media only screen and (max-width: 600px) {
    padding: 50px 50px;
  }
  @media only screen and (min-width: 600px) {
    padding: 75px 100px;
  }
  @media only screen and (min-width: 996px) {
    padding: 100px 200px;
  }
`;

export const H1 = styled.h1`
  width: 100%;
  border-bottom: 3px solid black;
  padding: 10px;
  @media only screen and (max-width: 600px) {
    font-size: 25px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 30px;
  }
  @media only screen and (min-width: 996px) {
    font-size: 36px;
  }
`;

export const PhotoSection = styled.section`
  padding: 10px;
  border-bottom: 1px solid black;
`;

export const Title = styled.label`
  width: 20%;
  word-break: keep-all;
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 996px) {
    font-size: 24px;
  }
`;

export const PhotoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  @media only screen and (max-width: 600px) {
    width: 250px;
  }
  @media only screen and (min-width: 600px) {
    width: 450px;
  }
  @media only screen and (min-width: 996px) {
    width: 500px;
  }
`;

export const InputWrap = styled.div`
  width: 80%;
`;

export const BodyItem = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  border-bottom: 1px solid #9f9f9f;
`;

export const BodyInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #9f9f9f;
  :focus {
    outline: none;
  }
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 996px) {
    font-size: 16px;
  }
`;

export const HashWrap = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  border-bottom: 1px solid #9f9f9f;
`;

export const HashArr = styled.div`
  height: 100%;
  line-height: 50px;
`;

export const InnerHash = styled.span`
  background-color: #8eb696;
  margin-right: 5px;
  padding: 10px;
  border-radius: 20px;
  color: white;
  cursor: pointer;
`;

export const HashInput = styled.input`
  height: 100%;
  padding: 10px;
  border: none;
  :focus {
    outline: none;
  }
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 996px) {
    font-size: 16px;
  }
`;

export const BodyTextItem = styled.div`
  display: flex;
  height: 400px;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 10px;
  border-bottom: 1px solid #9f9f9f;
`;

export const Footer = styled.section`
  width: 100%;
  height: 100px;
  position: sticky;
  bottom: 0;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 50px;
  background-color: #f9f9f9;
`;

export const FooterBtn = styled.button`
  width: 180px;
  height: 70px;
  color: white;
  font-size: 24px;
  border: none;
  border-radius: 10px;
  background-color: #8eb696;
  :hover {
    background-color: #8d9696;
  }
`;

export const ZipcodeForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 270px;
`;
export const Zipcode = styled.input`
  width: 77px;
  height: 52px;
  margin-bottom: 16px;
  margin-right: 16px;
  font-size: 16px;
  text-align: center;
`;
export const ZipcodeSearch = styled.input`
  width: 124px;
  height: 52px;
  border: 0;
  background-color: #8eb696;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid #8eb696;
  cursor: pointer;
`;
