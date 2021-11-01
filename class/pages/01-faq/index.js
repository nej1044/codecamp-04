import { Wrapper, WrapperHeader, SearchImg, Profile, ProfileTitle,
  ProfileImg, HeaderNavbar, MenuTitle, SelectTitle, WrapperBody, 
  Question, QuestionTitle, QuestionNum, QuestionImg, WrapperFooter,
  FooterMenu, SelectFooterMenu  } from '../../styles/faq.js'

export default function MyPage() {
  // JavaScript
  
  return ( 
    // JSX
    // Fragment
    <>
      <head>
        <title>마이페이지</title>
        <meta name="description" content="" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"></link>
      </head>
      
      <Wrapper>
        <WrapperHeader>
          <SearchImg src="images/search.png" />
          <Profile>
            <h1>마이</h1> 
            <ProfileTitle>
              <ProfileImg src="images/profileImg.png" /> 임정아
              <img src="images/rightArrow.png" />
            </ProfileTitle>
          </Profile>
          <HeaderNavbar>
            <MenuTitle>공지사항</MenuTitle>
            <MenuTitle>이벤트</MenuTitle>
            <SelectTitle>FAQ</SelectTitle>
            <MenuTitle>Q&amp;A</MenuTitle>
          </HeaderNavbar>
        </WrapperHeader>
        <WrapperBody>
          <Question>
            <QuestionTitle>
              <QuestionNum>Q.01</QuestionNum>리뷰 작성은 어떻게 하나요?
            </QuestionTitle>
            <QuestionImg src="images/belowArrow.png" />
          </Question>
          <Question>
            <QuestionTitle>
              <QuestionNum>Q.02</QuestionNum>리뷰 수정/삭제는 어떻게 하나요?
            </QuestionTitle>
            <QuestionImg src="images/belowArrow.png" />
          </Question>
          <Question>
            <QuestionTitle>
              <QuestionNum>Q.03</QuestionNum>아이디/비밀번호를 잊어버렸어요.
            </QuestionTitle>
            <QuestionImg src="images/belowArrow.png" />
          </Question>
          <Question>
            <QuestionTitle>
              <QuestionNum>Q.04</QuestionNum>회원탈퇴를 하고 싶어요.
            </QuestionTitle>
            <QuestionImg src="images/belowArrow.png" />
          </Question>
          <Question>
            <QuestionTitle>
              <QuestionNum>Q.05</QuestionNum>출발지 설정은 어떻게 하나요?
            </QuestionTitle>
            <QuestionImg src="images/belowArrow.png" />
          </Question>
          <Question>
            <QuestionTitle>
              <QuestionNum>Q.06</QuestionNum>비밀번호를 변경하고 싶어요.
            </QuestionTitle>
            <QuestionImg src="images/belowArrow.png" />
          </Question>
        </WrapperBody>
        <WrapperFooter>
          <FooterMenu><img src="images/home.png" />홈</FooterMenu>
          <FooterMenu><img src="images/map.png" />잇츠로드</FooterMenu>
          <FooterMenu><img src="images/wishlist.png" />마이찜</FooterMenu>
          <SelectFooterMenu><img src="images/mypage.png" />마이</SelectFooterMenu>
        </WrapperFooter>
      </Wrapper>
    </>
  )
}