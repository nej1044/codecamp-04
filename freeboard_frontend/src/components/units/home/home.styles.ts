import styled from "@emotion/styled";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Section = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1200px;
  padding-top: 80px;

  ._community_ {
    width: 100%;
  }
`;

export const Board = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #c0c0c0;
  cursor: pointer;

  :last-child {
    border-bottom: none;
  }

  ._title_ {
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  ._like_ {
    margin-left: 5px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
`;

export const Article = styled.div`
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
  width: 280px;
  height: 230px;
  overflow: hidden;
`;

export const ProjectImg = styled.img`
  width: 100%;
  height: 70%;
  margin-bottom: 10px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
  object-fit: contain;
`;

export const ContentsHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 30%;
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
