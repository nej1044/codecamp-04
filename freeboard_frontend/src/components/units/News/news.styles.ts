import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

export const NewsWrap = styled.div`
  width: 100%;
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
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
  /* @media only screen and (min-width: 600px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  } */
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
  display: block;
  width: 120px;
  @media only screen and (max-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
  @media only screen and (min-width: 992px) {
    display: block;
  }
`;
