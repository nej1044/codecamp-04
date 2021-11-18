import styled from "@emotion/styled";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const BestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  margin-top: 100px;
`;

export const BestList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 50px;
`;

export const BestBoard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 250px;
  border: 1px solid #8eb695;
  border-radius: 30px;
  padding: 35px;
  cursor: pointer;
  :hover {
    background-color: #8eb695;
    color: white;
  }
`;

export const BestTitle = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
export const BestFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const BestUser = styled.div``;

export const UserName = styled.div``;

export const BestDate = styled.span``;

export const BestLike = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BestImg = styled.img``;

export const BestNum = styled.span``;

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
  justify-content: space-between;
  width: 100%;
  padding: 10px 30px;
`;

export const ResetBtn = styled.button`
  width: 180px;
  height: 50px;
  font-size: 18px;
  font-weight: 700;
  border: 0;
  background: none;
  :hover {
    color: #999999;
  }
  cursor: pointer;
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
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 250px;
  padding: 50px;
  border-bottom: 1px solid #8eb695;
  cursor: pointer;
  :hover {
    background-color: #8eb695;
    color: white;
  }
`;

export const BoardTitle = styled.span`
  font-size: 26px;
  font-weight: 700;
`;

export const BoardContents = styled.span``;

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
