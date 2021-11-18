import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @font-face {
    font-family: "Black Han";
    src: url("/fonts/BlackHanSans-Regular.ttf");
  }
`;

export const HomeHeader = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  background-color: #8eb695;
  border-top: 1px solid white;
`;

export const HeaderTitle = styled.h1`
  font-size: 26px;
  color: white;
`;

export const HeaderSubTitle = styled.h2`
  font-family: "Black Han";
  font-size: 100px;
  color: white;
`;

export const HomeBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ProjectSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 850px;
  padding: 100px;
`;

export const SectionTitle = styled.h2`
  font-size: 30px;
`;

export const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Project = styled.div`
  width: 500px;
  height: 550px;
  border: 1px solid #8eb695;
  border-radius: 40px;
`;

export const DeveloperSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 300px;
  padding: 60px 100px;
  background-color: #8eb695;
  color: white;
`;

export const DeveloperTitle = styled.h2`
  color: white;
  font-size: 30px;
`;

export const PostingSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 750px;
  padding: 100px;
`;

export const PostingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Posting = styled.div`
  width: 350px;
  height: 450px;
  border: 1px solid #8eb695;
  border-radius: 40px;
`;
