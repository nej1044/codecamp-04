import styled from "@emotion/styled";

const FooterWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  padding: 100px;
  background-color: #8eb695;
  color: white;
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
  width: 40%;
`;

const BottomInfo = styled.span`
  display: flex;
  justify-content: space-between;
  width: 55%;
`;

const Info = styled.span`
  font-size: 16px;
`;

const FooterBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  color: #5f5f5f;
`;

const Copyright = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const Footer = () => {
  return (
    <FooterWrap>
      <InfoWrap>
        <TopInfo>
          <Info>(주)디벨로펌</Info>
          <Info>서울특별시 구로구 디지털로 300</Info>
          <Info>대표: 노은정</Info>
          <Info>사업자등록번호: 123-45-67891</Info>
        </TopInfo>
        <BottomInfo>
          <Info>통신판매업신고: 2021-서울구로-1234</Info>
          <Info>유료직업소개사업등록번호: 제2021-1234567-89-1-23456</Info>
          <Info>nej1044@naver.com</Info>
        </BottomInfo>
      </InfoWrap>
      <FooterBody>
        <span>
          (주)디벨로펌은 통신판매중개자이며, 통신판매의 당사자가 아닙니다. 상품,
          상품정보, 거래에 관한 의무와 책임은 판매회원에게 있습니다
        </span>
        <span>
          (주)디벨로펌 사이트의 상품/판매회원/중개 서비스/거래 정보, 콘텐츠, UI
          등에 대한 무단복제, 전송, 배포, 스크래핑 등의 행위는 저작권법,
          콘텐츠산업 진흥법 등 관련법령에 의하여 엄격히 금지됩니다.
        </span>
      </FooterBody>
      <Copyright>Copyright © 2021 kmong Inc. All rights reserved.</Copyright>
    </FooterWrap>
  );
};

export default Footer;
