import styled from "@emotion/styled";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { IPaginationStyled } from "./pagination.types";

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
  color: black;
  border: ${(props: IPaginationStyled) =>
    props.current === true ? "none" : "1px solid black"};
  outline: none;
  border-radius: 5px;
  background-color: ${(props: IPaginationStyled) =>
    props.current === true ? "#ffd301" : "white"};
  :hover {
    color: black;
    background-color: #ffd301;
    border: 1px solid #ffd301;
  }
  cursor: pointer;
`;
