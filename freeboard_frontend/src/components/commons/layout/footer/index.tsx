import styled from "@emotion/styled";

const FooterWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  padding: 100px;
  border-top: 1px solid #e6e6e6;
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const TopInfo = styled.span`
  display: flex;
  justify-content: space-between;
  width: 700px;
`;

const BottomInfo = styled.span`
  display: flex;
  justify-content: space-between;
  width: 900px;
`;

const Info = styled.span`
  font-size: 16px;
`;

const FooterBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: #5f5f5f;
  margin-bottom: 20px;
  word-break: keep-all;
  text-align: center;
`;

const Copyright = styled.span`
  font-weight: 200;
  font-size: 20px;
`;

const Footer = () => {
  return (
    <FooterWrap>
      <InfoWrap>
        <TopInfo>
          <Info>(주)코드캠프</Info>
          <Info>서울특별시 구로구 디지털로 300</Info>
          <Info>대표: 노원두</Info>
          <Info>이메일: support@codebootcamp.co.k</Info>
        </TopInfo>
        <BottomInfo>
          <Info>학원 등록 번호: 제 5845호</Info>
          <Info>사업자등록번호: 717-87-02373</Info>
          <Info>운영 시간: AM 09:30 ~ PM:06:30</Info>
        </BottomInfo>
      </InfoWrap>
      <FooterBody>
        (주)코드캠프은 통신판매중개자이며, 통신판매의 당사자가 아닙니다. 상품,
        상품정보, 거래에 관한 의무와 책임은 판매회원에게 있습니다
        <br />
        (주)코드캠프 사이트의 상품/판매회원/중개 서비스/거래 정보, 콘텐츠, UI
        등에 대한 무단복제, 전송, 배포, 스크래핑 등의 행위는 저작권법,
        콘텐츠산업 진흥법 등 관련법령에 의하여 엄격히 금지됩니다.
      </FooterBody>
      <Copyright>Copyright © 2022 Codecamp Inc. All rights reserved.</Copyright>
    </FooterWrap>
  );
};

export default Footer;
