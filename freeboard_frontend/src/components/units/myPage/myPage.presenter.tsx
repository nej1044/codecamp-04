import { Box } from "@mui/system";
import { Avatar, Image } from "antd";
import Head from "next/head";

import * as S from "./myPage.styles";

const MyPageUI = (props) => {
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <S.Wrapper>
        <S.MyPageHeader>
          <S.HeaderLeft>
            <S.CoinTitle>충전내역</S.CoinTitle>
            <div></div>
          </S.HeaderLeft>
          <S.HeaderRight>
            <S.CoinSection>
              <S.CoinTitle>로켓코인</S.CoinTitle>
              <S.CoinCountWrap>
                <S.CountTitle>로켓코인</S.CountTitle>
                <S.PointAmount>
                  {props.data?.fetchUserLoggedIn.userPoint.amount}
                </S.PointAmount>
              </S.CoinCountWrap>
              <S.CoinBtn onClick={props.handleOpen}>충전</S.CoinBtn>
            </S.CoinSection>
            <S.ProfileSection>
              <Avatar
                src={
                  <Image
                    src="https://joeschmoe.io/api/v1/random"
                    style={{ width: 150 }}
                  />
                }
                style={{ width: 150, height: 150 }}
              />
              <S.ProfileName>
                {props.data?.fetchUserLoggedIn.name}
              </S.ProfileName>
            </S.ProfileSection>
          </S.HeaderRight>
        </S.MyPageHeader>
        <S.MyPageBody>
          <S.MyCoin>내 프로젝트</S.MyCoin>
        </S.MyPageBody>
      </S.Wrapper>
      <S.StyledModal
        open={props.open}
        onClose={props.handleClose}
        BackdropComponent={S.Backdrop}
      >
        <Box sx={S.style}>
          <S.ModalWrap>
            <S.ModalTitle>로켓코인충전</S.ModalTitle>
            <S.ModalCount>
              <S.ModalInput
                onChange={props.handleChangeCoin}
                type="text"
                placeholder="금액을 입력하세요"
              />
              <S.ModalText>원</S.ModalText>
            </S.ModalCount>
            <S.ModalBtn onClick={props.onClickPayment}>결제하기</S.ModalBtn>
          </S.ModalWrap>
        </Box>
      </S.StyledModal>
    </>
  );
};

export default MyPageUI;
