import * as S from "./header.styles";
import { RocketTwoTone } from "@ant-design/icons";
import { Backdrop, Box, Modal, Fade } from "@material-ui/core";
import { IHeaderUIProps } from "./header.types";

const HeaderUI = (props: IHeaderUIProps) => {
  return (
    <S.HeaderWrapper>
      <S.Logo onClick={props.moveHome}>
        <RocketTwoTone twoToneColor="#8eb695" />
        디벨로펌
      </S.Logo>
      <S.HeaderMenu>
        <S.LoginBtn onClick={props.openLogin}>로그인</S.LoginBtn>
        <S.LoginBtn onClick={props.moveSignup}>회원가입</S.LoginBtn>
      </S.HeaderMenu>
      <Modal
        aria-labelledby="hero-header"
        aria-describedby="login-wrapper"
        open={props.isOpen}
        onClose={props.openLogin}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.isOpen}>
          <Box sx={S.modalStyle}>
            <S.HeroHeader id="hero-header">
              <S.HeaderImg src="/images/hero-header.png" />
              <S.HeaderSubTitle>능력있는 개발자들의 모임</S.HeaderSubTitle>
              <S.HeaderTitle>디벨로펌</S.HeaderTitle>
            </S.HeroHeader>
            <S.Wrapper id="login-wrapper">
              <h1>로그인</h1>
              <S.LoginInput
                type="text"
                name="email"
                placeholder="이메일을 입력해주세요"
                onChange={props.handleChangeInput}
              />
              <S.LoginInput
                type="password"
                name="password"
                placeholder="비밀번호를 입력해주세요"
                onChange={props.handleChangeInput}
              />
              <S.WrapperBtn onClick={props.onClickLogin}>로그인</S.WrapperBtn>
              <S.BodyFooter>
                <span>
                  <input type="checkbox" /> 로그인 유지
                </span>
                <span>아이디 비밀번호 찾기</span>
              </S.BodyFooter>
              <S.SocialWrapper>
                <span>SNS 계정으로 간편 로그인</span>
                <div></div>
              </S.SocialWrapper>
              <span>디벨로펌 회원이 되어보세요</span>
              <S.FooterBtn onClick={props.moveSignup}>
                디벨로펌 회원가입
              </S.FooterBtn>
            </S.Wrapper>
          </Box>
        </Fade>
      </Modal>
    </S.HeaderWrapper>
  );
};

export default HeaderUI;
