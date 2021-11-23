import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  padding: 100px;
`;

export const NewsTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 30px;
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #8eb695;
  margin-top: 50px;
`;

export const NewsList = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: black;
  text-decoration: none;
  padding: 50px 30px;
  border-bottom: 1px solid #8eb695;
  :hover,
  :focus,
  :active,
  :visited :focus-visible {
    color: #9f9f9f;
  }
`;

export const ContentsIdx = styled.span`
  width: 200px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

export const ContentsTitle = styled.span`
  width: 100%;
  font-weight: 500;
  font-size: 23px;
`;

export const ContentsDate = styled.span`
  width: 100px;
`;
