import { SearchOutlined } from "@ant-design/icons";
import * as S from "./header.styles";
// import { RocketTwoTone, SearchOutlined } from "@ant-design/icons";
import { Backdrop, Box, Modal, Fade } from "@material-ui/core";
import { IHeaderUIProps } from "./header.types";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import Badge from "@mui/material/Badge";
// import { styled } from "@mui/material/styles";

// const StyledBadge = styled(Badge)(({ theme }) => ({
//   "& .MuiBadge-badge": {
//     right: -3,
//     top: 13,
//     border: `2px solid ${theme.palette.background.paper}`,
//     padding: "0 4px",
//   },
// }));

const HeaderUI = (props: IHeaderUIProps) => {
  return (
    <>
      <S.HeaderWrapper>
        <S.ContentsWrap>
          <S.LogoTitle onClick={props.moveHome}>develofirm</S.LogoTitle>
          <S.HeaderMenu>
            <S.InputWrapper>
              <S.SearchInput
                type="search"
                placeholder="커뮤니티, 서비스를 검색해 보세요."
              />
              <SearchOutlined />
            </S.InputWrapper>
            {!props.accessToken && (
              <S.HeaderList>
                <S.LoginBtn onClick={props.openLogin}>로그인</S.LoginBtn>
                <S.SignUpBtn onClick={props.moveSignup}>
                  무료 회원가입
                </S.SignUpBtn>
              </S.HeaderList>
            )}
            {props.accessToken && (
              <S.HeaderList>
                <S.LoginBtn>메세지</S.LoginBtn>
                <S.LoginBtn>마이디벨로펌</S.LoginBtn>
              </S.HeaderList>
            )}
          </S.HeaderMenu>
        </S.ContentsWrap>
      </S.HeaderWrapper>
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
              <S.HeaderSubTitle>
                프리랜서 개발자들의 No.1 커뮤니티
              </S.HeaderSubTitle>
              <S.HeaderTitle>디벨로펌</S.HeaderTitle>
            </S.HeroHeader>
            <S.Wrapper id="login-wrapper">
              <S.SectionTitle>로그인</S.SectionTitle>
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
              <span>디벨로펌 회원이 되어보세요</span>
              <S.FooterBtn onClick={props.moveSignup}>
                디벨로펌 회원가입
              </S.FooterBtn>
            </S.Wrapper>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default HeaderUI;
