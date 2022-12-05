import styled from "@emotion/styled";
import { IBoardListEmotionProps } from "./BoardList.types";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  margin-top: 100px;
`;

export const ListHeader = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid black;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 30px;
`;

export const HeaderForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  width: 30%;
  height: 50px;
  padding: 0 30px;
  border: 1px solid #c0c0c0;
  border-radius: 100px;
  transition: width 0.5s;

  :hover {
    border: 1px solid black;
  }
  :focus-within {
    border: 1px solid black;
    width: 50%;
    transition: width 0.5s;
  }
`;

export const HeaderInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 10px;
  border: none;

  :focus {
    border: none;
    outline: none;
  }
`;

export const HeaderBtn = styled.button`
  width: 100px;
  height: 100%;
  color: white;
  font-size: 18px;
  font-weight: 700;
  border: 1px solid #fbdea2;
  border-radius: 0 5px 5px 0;
  background-color: #fbdea2;
  &:hover {
    background-color: #8eb695;
    border: 1px solid #8eb695;
  }
  cursor: pointer;
`;

export const WriteBtn = styled.button`
  width: 120px;
  height: 50px;
  color: black;
  font-size: 18px;
  font-weight: 700;
  border: 1px solid #fbdea2;
  border-radius: 5px;
  background-color: #ffd301;
  :hover {
    background-color: #f5c126;
  }
  cursor: pointer;
`;

export const ListBody = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ListBoard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 250px;
  padding: 50px;
  border-bottom: 1px solid black;
  cursor: pointer;
  :hover {
    background-color: #f9f9f9;
  }
`;

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ListComment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 50%;
`;
export const BoardTitle = styled.span`
  width: 900px;
  height: 45px;
  overflow: hidden;
  font-size: 26px;
  font-weight: 700;
`;

export const BoardContents = styled.span`
  width: 900px;
  max-height: 68px;
  overflow: hidden;
`;

export const BoardUser = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  margin-top: 30px;
`;

export const ListFooter = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  height: 200px;
  margin-bottom: 30px;
`;

export const SideBarWrapper = styled.div`
  position: fixed;
  top: 160px;
  left: 10px;
  width: 300px;
  padding-right: 100px;
  text-align: right;
`;

export const SideBarTitle = styled.div`
  margin: 30px 0;
  color: #9f9f9f;
`;

export const CategoryWrapper = styled.ul`
  list-style: none;
`;

export const Category = styled.li`
  margin: 10px 0;
  font-size: 20px;
  color: ${(props: IBoardListEmotionProps) =>
    props.active === true ? "black" : "#9f9f9f"};
  font-weight: ${(props: IBoardListEmotionProps) =>
    props.active === true ? "700" : "normal"};
  cursor: pointer;
`;

export const CommentsCount = styled.span`
  font-size: 17px;
  font-weight: 500;
`;

export const KeyTitle = styled.span`
  color: black;
  background: ${(props: IBoardListEmotionProps) =>
    props.isMatched ? "#ffd301" : "none"};
`;
