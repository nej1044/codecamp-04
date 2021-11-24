import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const LectureHeader = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  background-color: #8eb695;
  border-top: 1px solid white;
`;

export const HeaderTitle = styled.h2`
  font-size: 36px;
  color: white;
`;

export const HeaderSubtitle = styled.p`
  font-size: 20px;
  color: white;
  margin-bottom: 50px;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 1200px;
  height: 80px;
`;

export const HeaderInput = styled.input`
  width: 1150px;
  height: 100%;
  padding: 20px;
  border: 1px solid white;
  &:focus {
    border: none;
    outline: 1px solid #8eb695;
  }
  font-size: 24px;
`;

export const HeaderBtn = styled.button`
  width: 150px;
  height: 100%;
  color: white;
  font-size: 18px;
  font-weight: 700;
  border: 1px solid white;
  border-radius: 0 5px 5px 0;
  background-color: #8eb695;
  cursor: pointer;
`;

export const LectureBody = styled.section`
  width: 100%;
  min-height: 100px;
  padding: 50px 145px;
`;

export const ContentsHeader = styled.div`
  width: 100%;
  height: 60px;
  background-color: #8eb695;
  padding: 0 50px;
`;

export const Contents = styled.div`
  float: left;
  margin: 50px;
  border: 1px solid #8eb695;
  overflow: hidden;
  border-radius: 10px 10px 0px 0px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;
  height: 100%;
`;

export const ContentsBtn = styled.span`
  cursor: pointer;
  color: white;
`;
