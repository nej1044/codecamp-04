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
  justify-content: center;
  width: 100%;
  @media only screen and (max-width: 600px) {
    height: 50px;
  }
  @media only screen and (min-width: 600px) {
    height: 75px;
  }
  @media only screen and (min-width: 996px) {
    height: 80px;
  }
`;

export const HeaderInput = styled.input`
  width: 70%;
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
  height: 100%;
  color: white;
  font-size: 18px;
  font-weight: 700;
  border: 1px solid white;
  border-radius: 0 5px 5px 0;
  background-color: #8eb695;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    width: 100px;
  }
  @media only screen and (min-width: 600px) {
    width: 125px;
  }
  @media only screen and (min-width: 996px) {
    width: 150px;
  }
`;

export const LectureBody = styled.section`
  width: 100%;
  /* min-height: 100px; */
  @media only screen and (max-width: 600px) {
    padding: 25px 0px;
  }
  @media only screen and (min-width: 600px) {
    padding: 50px 70px;
  }
  @media only screen and (min-width: 996px) {
    padding: 50px 155px;
  }
`;

export const ContentsHeader = styled.div`
  width: 100%;
  background-color: #8eb695;
  @media only screen and (max-width: 600px) {
    height: 40px;
    padding: 0 30px;
  }
  @media only screen and (min-width: 600px) {
    height: 40px;
    padding: 0 50px;
  }
  @media only screen and (min-width: 996px) {
    height: 60px;
    padding: 0 50px;
  }
`;

export const Contents = styled.div`
  float: left;
  margin: 50px;
  border: 1px solid #8eb695;
  overflow: hidden;
  border-radius: 10px 10px 0px 0px;
  @media only screen and (max-width: 600px) {
    width: 270px;
    height: 250px;
  }
  @media only screen and (min-width: 600px) {
    width: 520px;
    height: 350px;
  }
  @media only screen and (min-width: 996px) {
    width: 640px;
    height: 400px;
  }
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
