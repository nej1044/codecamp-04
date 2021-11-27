import styled from "@emotion/styled";
import { CloseCircleFilled } from "@ant-design/icons";
export const PhotoUpload = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  width: 282px;
  margin-bottom: 40px;
`;

export const Photo = styled.div`
  width: 78px;
  height: 78px;
  background-color: #8eb695;
  text-align: center;
  line-height: 78px;
  color: white;
  cursor: pointer;
`;

export const InsertedImg = styled.img`
  width: 78px;
  height: 78px;
`;

export const CloseCircle = styled(CloseCircleFilled)`
  position: absolute;
  top: 5px;
  right: 30px;
  z-index: 1;
  color: white;
`;
