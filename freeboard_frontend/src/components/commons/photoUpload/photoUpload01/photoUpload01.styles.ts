import styled from "@emotion/styled";
import { CloseCircleFilled } from "@ant-design/icons";
export const PhotoUpload = styled.div`
  /* display: flex;
  flex-direction: row;
  justify-content: space-between; */
  position: relative;
  width: 282px;
  margin-bottom: 40px;
`;

export const Photo = styled.div`
  background-color: black;
  text-align: center;
  color: white;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    width: 42px;
    height: 42px;
    line-height: 42px;
    font-size: 10px;
  }
  @media only screen and (min-width: 600px) {
    width: 66px;
    height: 66px;
    line-height: 66px;
    font-size: 12px;
  }
  @media only screen and (min-width: 996px) {
    width: 78px;
    height: 78px;
    line-height: 78px;
    font-size: 14px;
  }
`;

export const InsertedImg = styled.img`
  @media only screen and (max-width: 600px) {
    width: 42px;
    height: 42px;
  }
  @media only screen and (min-width: 600px) {
    width: 66px;
    height: 66px;
  }
  @media only screen and (min-width: 996px) {
    width: 78px;
    height: 78px;
  }
`;

export const CloseCircle = styled(CloseCircleFilled)`
  position: absolute;
  z-index: 1;
  color: white;
  @media only screen and (max-width: 600px) {
    top: 2px;
    right: 10px;
    font-size: 10px;
  }
  @media only screen and (min-width: 600px) {
    top: 5px;
    right: 30px;
    font-size: 12px;
  }
  @media only screen and (min-width: 996px) {
    top: 5px;
    right: 30px;
    font-size: 14px;
  }
`;
