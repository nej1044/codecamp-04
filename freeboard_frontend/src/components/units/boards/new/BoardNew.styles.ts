import styled from "@emotion/styled";
import { IBoardNewEmotion } from "./BoardNew.types";

export const Wrapper = styled.div`
  display: flex;
  width: 1200px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 50px auto;
  padding: 50px;
  border-radius: 100px;
`;

export const H1 = styled.h1`
  font-size: 36px;
  padding-bottom: 30px;
`;

export const WrapperHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
`;

export const TopicWrapper = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;
  margin-left: 50px;
`;

export const TopicBtn = styled.input`
  width: 100px;
  height: 50px;
  color: black;
  font-size: 16px;
  font-weight: 600;
  border: ${(props: IBoardNewEmotion) =>
    props.topic === true ? "none" : "1px solid #c0c0c0"};
  border-radius: 5px;
  background-color: ${(props: IBoardNewEmotion) =>
    props.topic === true ? "#ffd301" : "white"};
  cursor: pointer;
  :hover {
    background-color: #ffd301;
    border: none;
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
  border: 1px solid #c0c0c0;
  border-radius: 8px;
  &:focus {
    border: none;
    outline: 1px solid black;
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
  border: 1px solid #c0c0c0;
  border-radius: 8px;
  &:focus {
    border: none;
    outline: 1px solid black;
  }
`;
export const ContentInput = styled.textarea`
  width: 996px;
  height: 480px;
  padding: 14px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  resize: none;
  border: 1px solid #c0c0c0;
  border-radius: 8px;
  &:focus {
    border: none;
    outline: 1px solid black;
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
  background-color: #ffd301;
  border-radius: 5px;
  color: black;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid #fbdea2;
  cursor: pointer;
  &:hover {
    border: none;
    outline: none;
    background-color: #f5c126;
  }
`;

export const AdminBtn = styled.button`
  width: 179px;
  height: 52px;
  margin-top: 80px;
  border: 0;
  background-color: ${(props: IBoardNewEmotion) =>
    props.btnColor === true ? "#ffd301" : "#e4e5ed"};
  :focus,
  :hover {
    outline: none;
    border: 1px solid
      ${(props: IBoardNewEmotion) =>
        props.btnColor === true ? "#f5c126" : "#e4e5ed"};
    background-color: ${(props: IBoardNewEmotion) =>
      props.btnColor === true ? "#f5c126" : "#e4e5ed"};
  }
  cursor: pointer;
  color: black;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
`;

export const Error = styled.p`
  color: red;
  font-size: 15px;
  margin: 10px 0px 0px 0px;
`;

export const PhotoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;
