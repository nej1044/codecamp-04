import styled from "@emotion/styled";
import { IBoardListEmotionProps } from "./BoardList.types";

export const Wrapper = styled.div`
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
  height: 200px;
  border-bottom: 1px solid #8eb695;
`;

export const HeaderForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
`;
export const Selected = styled.select`
  width: 100px;
  height: 100%;
  padding: 5px;
  border: 1px solid #fbdea2;
  :focus {
    outline: none;
  }
`;

export const HeaderInput = styled.input`
  width: 800px;
  height: 100%;
  padding: 10px;
  border: 1px solid #fbdea2;
  &:focus {
    border: none;
    outline: 1px solid #8eb695;
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

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 20px 30px;
`;

export const WriteBtn = styled.button`
  width: 180px;
  height: 50px;
  color: white;
  font-size: 18px;
  font-weight: 700;
  border: 1px solid #fbdea2;
  border-radius: 5px;
  background-color: #fbdea2;
  &:hover {
    background-color: #8eb695;
    border: 1px solid #8eb695;
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
  border-bottom: 1px solid #8eb695;
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
  border: 1px solid #8eb695;
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
`;

export const BoardUser = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  margin-top: 30px;
`;
export const BoardWriter = styled.span``;

export const BoardCreatedAt = styled.span``;

export const ListFooter = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  height: 200px;
  margin-bottom: 30px;
`;

export const SideBarWrapper = styled.div`
  width: 300px;
  padding: 50px;
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
    props.active === true ? "#8eb695" : "black"};
  font-weight: ${(props: IBoardListEmotionProps) =>
    props.active === true ? "700" : "normal"};
  cursor: pointer;
`;

export const CommentsCount = styled.span`
  font-size: 17px;
  font-weight: 500;
`;

export const KeyTitle = styled.span`
  color: ${(props: IBoardListEmotionProps) =>
    props.isMatched ? "#8eb695" : "black"};
`;
