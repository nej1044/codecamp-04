import { Box } from "@mui/system";
import { Avatar, Image } from "antd";
import Head from "next/head";
import { getDate } from "../../../../commons/libraries/utils";
import InfiniteScroll from "react-infinite-scroller";
import * as S from "./myPage.styles";
import MyPageProject from "../project/project.containter";
import Pick from "../pick/pick.container";
import { EditOutlined } from "@ant-design/icons";
import { IMyPageUI } from "./myPage.types";

const MyPageUI = (props: IMyPageUI) => {
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
            <S.CoinTitle>마이코인</S.CoinTitle>
            <S.Transaction>
              <InfiniteScroll
                pageStart={0}
                hasMore={true}
                loadMore={props.onLoadMore}
                useWindow={false}
              >
                {props.fetchPoint?.fetchPointTransactions.map((el: any) => (
                  <S.TransHeader key={el._id}>
                    <S.TransBasic>{getDate(el.createdAt)}</S.TransBasic>
                    <S.TransContents status={el.status === "구매"}>
                      {el.status}
                    </S.TransContents>
                    <S.TransContents status={el.status === "구매"}>
                      {el.amount}
                    </S.TransContents>
                    <S.TransContents status={el.status === "구매"}>
                      {el.balance}
                    </S.TransContents>
                  </S.TransHeader>
                ))}
              </InfiniteScroll>
            </S.Transaction>
          </S.HeaderLeft>
          <S.HeaderRight>
            <S.CoinSection>
              <S.CoinTitle>로켓코인</S.CoinTitle>
              <S.CoinCountWrap>
                <S.CountTitle>로켓코인</S.CountTitle>
                <S.PointAmount>
                  {props.data?.fetchUserLoggedIn.userPoint?.amount}
                </S.PointAmount>
              </S.CoinCountWrap>
              <S.CoinBtn onClick={props.handleOpen}>충전</S.CoinBtn>
            </S.CoinSection>
            <S.ProfileSection>
              <S.Password onClick={props.passwordOpen}>비밀번호변경</S.Password>
              <Avatar
                src={
                  <Image
                    src="https://joeschmoe.io/api/v1/random"
                    style={{ width: "60%", height: "60%", margin: "0 auto" }}
                  />
                }
                style={{ width: "70%", height: "70%" }}
              />
              {!props.isEdit && (
                <div>
                  <S.ProfileName>
                    {props.data?.fetchUserLoggedIn.name}
                  </S.ProfileName>
                  <EditOutlined
                    style={{ fontSize: "15px" }}
                    onClick={props.openUpdateUser}
                  />
                </div>
              )}
              {props.isEdit && (
                <S.PasswordWrap>
                  <S.PasswordInput
                    type="text"
                    defaultValue={props.data?.fetchUserLoggedIn.name}
                    onChange={props.onChangeName}
                  />
                  <S.PasswordBtn onClick={props.updateName}>변경</S.PasswordBtn>
                </S.PasswordWrap>
              )}
            </S.ProfileSection>
          </S.HeaderRight>
        </S.MyPageHeader>
        <MyPageProject />
        <Pick />
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
      <S.StyledModal
        open={props.passwordEdit}
        onClose={props.passwordClose}
        BackdropComponent={S.Backdrop}
      >
        <Box sx={S.style}>
          <S.ModalWrap>
            <S.ModalTitle>비밀번호 변경</S.ModalTitle>
            <S.PWWrap>
              <S.ModalText>새 비밀번호</S.ModalText>
              <S.PWInput
                type="password"
                placeholder="새 비밀번호를 입력해주세요"
                onChange={props.onChangePw}
              />
            </S.PWWrap>
            <S.PWWrap>
              <S.ModalText>새 비밀번호 확인</S.ModalText>
              <S.PWInput
                type="password"
                placeholder="새 비밀번호를 확인해주세요"
                onChange={props.onChangeRePw}
              />
            </S.PWWrap>
            <S.ModalBtn onClick={props.resetPassword}>비밀번호 변경</S.ModalBtn>
          </S.ModalWrap>
        </Box>
      </S.StyledModal>
    </>
  );
};

export default MyPageUI;
