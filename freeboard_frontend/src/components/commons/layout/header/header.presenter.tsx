// import { SearchOutlined } from "@ant-design/icons";
import * as S from "./header.styles";
// import { RocketTwoTone, SearchOutlined } from "@ant-design/icons";
import { Backdrop, Box, Modal, Fade } from "@material-ui/core";
import { IHeaderUIProps } from "./header.types";
import { useRouter } from "next/router";
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
  const router = useRouter();
  return (
    <>
      <S.HeaderWrapper>
        <S.ContentsWrap>
          <S.LogoTitle onClick={props.moveHome}>
            codecamp
            <span style={{ fontSize: "14px", marginLeft: "5px" }}>
              그라운드
            </span>
          </S.LogoTitle>
          <S.HeaderMenu>
            {/* <S.InputWrapper>
              <S.SearchInput
                type="search"
                placeholder="오픈 마켓, 커뮤니티에서 검색해 보세요."
              />
              <SearchOutlined />
            </S.InputWrapper> */}
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
                <S.LoginBtn onClick={() => router.push("/mypage")}>
                  마이그라운드
                </S.LoginBtn>
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
                개발 회사에서 만든 실무 코딩 부트캠프
              </S.HeaderSubTitle>
              <S.HeaderTitle>코드캠프</S.HeaderTitle>
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
              <span>코드캠프 그라운드 회원이 되어보세요</span>
              <S.FooterBtn onClick={props.moveSignup}>
                그라운드 회원가입
              </S.FooterBtn>
            </S.Wrapper>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default HeaderUI;
