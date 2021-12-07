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
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 550px;
  padding: 20px;
  cursor: pointer;
`;

export const ProjectImg = styled.img`
  width: 100%;
  height: 250px;
  margin-bottom: 10px;
`;

export const ProjectContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 200px;
  padding: 10px;
`;

export const ContentsHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProjectName = styled.span`
  width: 100%;
  font-size: 24px;
`;

export const ProjectRemarks = styled.span`
  width: 100%;
  font-size: 18px;
  color: #9f9f9f;
`;

export const Tag = styled.span`
  background-color: #8eb696;
  margin-right: 10px;
  padding: 10px;
  border-radius: 20px;
  color: white;
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

export const DeveloperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 200px;
  padding: 0 40px;
`;

export const DeveloperTitle = styled.h2`
  color: white;
  font-size: 30px;
`;

export const Developer = styled.span`
  font-size: 26px;
`;

export const ProfileImg = styled.img`
  background-color: white;
  border-radius: 50%;
  margin: 20px;
`;

export const PostingSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 650px;
  padding: 80px 100px;
`;

export const PostingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 400px;
`;

export const Posting = styled.div`
  width: 350px;
  height: 300px;
  cursor: pointer;
`;

export const PostingWriter = styled.span`
  font-size: 20px;
`;

export const PostingContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 350px;
  height: 300px;
  padding: 30px 40px;
  border: 1px solid #e9e9e9;
  background-color: #f7f7f7;
`;

export const PostingDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostingDate = styled.span`
  color: #9f9f9f;
`;

export const PostingTitle = styled.span`
  max-height: 100px;
  overflow: hidden;
  font-size: 20px;
  margin: 10px 0;
`;

export const PostingLike = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const LikeImg = styled.img`
  margin-right: 10px;
`;
