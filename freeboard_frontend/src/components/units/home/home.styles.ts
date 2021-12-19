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
  background-color: #8eb695;
  border-top: 1px solid white;
  @media only screen and (max-width: 600px) {
    height: 200px;
  }
  @media only screen and (min-width: 600px) {
    height: 400px;
  }
`;

export const HeaderTitle = styled.h1`
  color: white;
  @media only screen and (max-width: 600px) {
    font-size: 13px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 26px;
  }
`;

export const HeaderSubTitle = styled.h2`
  font-family: "Black Han";
  color: white;
  @media only screen and (max-width: 600px) {
    font-size: 50px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 100px;
  }
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
  @media only screen and (max-width: 600px) {
    padding: 50px;
    align-items: center;
  }
  @media only screen and (min-width: 600px) {
    padding: 100px;
  }
`;

export const SectionTitle = styled.h2`
  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 30px;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    width: 220px;
  }
  @media only screen and (min-width: 600px) {
    width: 380px;
  }
`;

export const ProjectImg = styled.img`
  width: 100%;
  margin-bottom: 10px;
  @media only screen and (max-width: 600px) {
    height: 140px;
    padding: 5px;
  }
  @media only screen and (min-width: 600px) {
    height: 120px;
    padding: 5px;
  }
  @media only screen and (min-width: 996px) {
    height: 250px;
    padding: 20px;
  }
`;

export const ProjectContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;

export const ContentsHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProjectName = styled.span`
  width: 100%;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 996px) {
    font-size: 24px;
  }
`;

export const ProjectRemarks = styled.span`
  width: 100%;
  color: #9f9f9f;
  @media only screen and (max-width: 600px) {
    font-size: 10px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 996px) {
    font-size: 18px;
  }
`;

export const Tag = styled.span`
  background-color: #8eb696;
  margin-right: 10px;
  padding: 10px;
  border-radius: 20px;
  color: white;
  @media only screen and (max-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 996px) {
    display: inline-block;
  }
`;

export const DeveloperSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: #8eb695;
  color: white;
  @media only screen and (max-width: 600px) {
    height: 150px;
    padding: 30px 50px;
    align-items: center;
  }
  @media only screen and (min-width: 600px) {
    height: 300px;
    padding: 60px 100px;
  }
`;

export const DeveloperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 200px;
  @media only screen and (max-width: 600px) {
    padding: 0;
  }
  @media only screen and (min-width: 600px) {
    padding: 0 40px;
  }
`;

export const DeveloperTitle = styled.h2`
  color: white;
  font-size: 30px;
  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 30px;
  }
`;

export const Developer = styled.span`
  @media only screen and (max-width: 600px) {
    font-size: 10px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 996px) {
    font-size: 26px;
  }
`;

export const ProfileImg = styled.img`
  background-color: white;
  border-radius: 50%;
  @media only screen and (max-width: 600px) {
    width: 16px;
    margin: 10px;
  }
  @media only screen and (min-width: 600px) {
    width: 32px;
    margin: 15px;
  }
  @media only screen and (min-width: 996px) {
    width: 52px;
    margin: 20px;
  }
`;

export const PostingSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  @media only screen and (max-width: 600px) {
    padding: 40px 50px;
    align-items: center;
  }
  @media only screen and (min-width: 600px) {
    padding: 80px 100px;
  }
`;

export const PostingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Posting = styled.div`
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 600px) {
    width: 230px;
  }
  @media only screen and (min-width: 996px) {
    width: 350px;
  }
`;

export const PostingWriter = styled.span`
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 15px;
  }
  @media only screen and (min-width: 996px) {
    font-size: 20px;
  }
`;

export const PostingContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  border: 1px solid #e9e9e9;
  background-color: #f7f7f7;
  @media only screen and (max-width: 600px) {
    padding: 20px 20px;
  }
  @media only screen and (min-width: 600px) {
    padding: 20px 20px;
  }
  @media only screen and (min-width: 996px) {
    padding: 30px 40px;
  }
`;

export const PostingDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostingDate = styled.span`
  color: #9f9f9f;
`;

export const PostingTitle = styled.span`
  overflow: hidden;
  margin: 10px 0;
  @media only screen and (max-width: 600px) {
    max-height: 20px;
    font-size: 15px;
  }
  @media only screen and (min-width: 600px) {
    max-height: 20px;
    font-size: 15px;
  }
  @media only screen and (min-width: 996px) {
    max-height: 100px;
    font-size: 20px;
  }
`;

export const PostingLike = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 50px;
`;

export const LikeImg = styled.img`
  margin-right: 10px;
`;
