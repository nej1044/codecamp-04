import styled from "@emotion/styled";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export const ListFooter = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  height: 200px;
  margin-bottom: 30px;
`;

export const PrevArrow = styled(LeftOutlined)`
  :hover {
    color: gray;
  }
  cursor: pointer;
`;

export const NextArrow = styled(RightOutlined)`
  :hover {
    color: gray;
  }
  cursor: pointer;
`;

export const Pages = styled.button`
  width: 40px;
  height: 40px;
  color: ${(props) => (props.current === true ? "white" : "black")};
  border: ${(props) =>
    props.current === true ? "1px solid #8eb695" : "1px solid #fbdea2"};
  border-radius: 5px;
  background-color: ${(props) =>
    props.current === true ? "#8eb695" : "white"};
  :hover {
    color: white;
    background-color: #8eb695;
    border: 1px solid #8eb695;
  }
  cursor: pointer;
`;
