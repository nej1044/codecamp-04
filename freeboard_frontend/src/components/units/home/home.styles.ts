import styled from "@emotion/styled";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
`;

export const ProjectSection = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1200px;
  padding: 80px 0;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
`;

export const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 260px;
  height: 360px;
  padding: 30px;
  background-color: #ffd400;
  border-radius: 15px;
  overflow: hidden;
`;

export const ProjectImg = styled.img`
  width: 400px;
  height: 400px;
  margin-bottom: 10px;
  padding: 20px;
`;

export const ContentsHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProjectSeller = styled.span`
  width: 100%;
  color: #0f0f0f;
  font-size: 15px;
`;

export const ProjectName = styled.span`
  width: 100%;
  font-size: 25px;
  font-weight: 600;
`;