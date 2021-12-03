import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 50px;
`;
export const ListHeader = styled.table`
  width: 100%;
  height: 250px;
  border: 1px solid #9f9f9f;
  font-size: 16px;
`;

export const HeaderTitle = styled.th`
  width: 200px;
  border-right: 1px solid #9f9f9f;
`;

export const HeaderContents = styled.td`
  width: 200px;
  text-align: center;
  cursor: pointer;
  :hover {
    background-color: #f9f9f9;
  }
`;

export const Footer = styled.section`
  width: 100%;
  height: 80px;
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  background-color: #f9f9f9;
`;

export const FooterTitle = styled.span`
  font-size: 20px;
`;

export const FooterBtn = styled.button`
  width: 180px;
  height: 70px;
  color: white;
  font-size: 22px;
  border: none;
  border-radius: 10px;
  background-color: #8eb696;
  :hover {
    background-color: #8d9696;
  }
`;
