import styled from "@emotion/styled";
import { IBoardNewEmotion } from "./BoardNew.types";

export const Wrapper = styled.div`
  display: flex;
  width: 1200px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 50px auto;
  padding: 100px;
  border: 1px solid #8eb695;
  border-radius: 100px;
`;
export const H1 = styled.h1`
  font-size: 36px;
`;

export const WrapperHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
`;

export const TopicWrapper = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
`;

export const TopicBtn = styled.input`
  width: 100px;
  height: 50px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: ${(props: IBoardNewEmotion) =>
    props.topic === true ? "1px solid #8EB695" : "1px solid #fbdea2"};
  border-radius: 5px;
  background-color: ${(props: IBoardNewEmotion) =>
    props.topic === true ? "#8EB695" : "#fbdea2"};
  &:hover {
    background-color: #8eb695;
    border: 1px solid #8eb695;
  }
`;

export const BodyHeader = styled.div`
  display: flex;
  width: 996px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const HeaderForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MyLabel = styled.label`
  margin-top: 24px;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 600;
`;

export const HeaderInput = styled.input`
  width: 486px;
  height: 52px;
  padding: 14px;
  font-size: 16px;
  border: 1px solid #fbdea2;
  &:focus {
    border: none;
    outline: 1px solid #8eb695;
  }
`;

export const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BodyForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const BasicInput = styled.input`
  width: 996px;
  height: 52px;
  padding: 14px;
  font-size: 16px;
  border: 1px solid #fbdea2;
  &:focus {
    border: none;
    outline: 1px solid #8eb695;
  }
`;
export const ContentInput = styled.textarea`
  width: 996px;
  height: 480px;
  padding: 14px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  resize: none;
  border: 1px solid #fbdea2;
  &:focus {
    border: none;
    outline: 1px solid #8eb695;
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
export const ZipcodeSearch = styled.button`
  width: 124px;
  height: 52px;
  border: 0;
  background-color: #fbdea2;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid #fbdea2;
  &:hover {
    border: none;
    outline: 1px solid #8eb695;
    background-color: #8eb695;
  }
`;

export const PhotoUpload = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 282px;
  margin-bottom: 40px;
`;

export const Photo = styled.div`
  width: 78px;
  height: 78px;
  background-color: #8eb695;
`;

export const AdminBtn = styled.button`
  width: 179px;
  height: 52px;
  margin-top: 80px;
  border: 0;
  background-color: ${(props: IBoardNewEmotion) =>
    props.btnColor === true ? "#8EB695" : "#FBDEA2"};
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

export const Error = styled.p`
  color: red;
  font-size: 15px;
  margin: 10px 0px 0px 0px;
`;
