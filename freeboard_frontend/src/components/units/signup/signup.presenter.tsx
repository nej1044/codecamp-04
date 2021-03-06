import * as S from "./signup.styles";
import { RocketTwoTone } from "@ant-design/icons";
import { IPropsSignupUI } from "./signup.types";

const SignUpUI = (props: IPropsSignupUI) => {
  return (
    <S.Wrapper>
      <S.Logo onClick={props.moveHome}>
        <RocketTwoTone twoToneColor="#8eb695" />
        디벨로펌
      </S.Logo>
      <S.SignUpBody>
        <S.BodyTitle>딱 이것만 입력하면 가입완료!</S.BodyTitle>
        <S.BodyContainer>
          <S.BodySubTitle>이메일</S.BodySubTitle>
          <S.BodyInput
            type="text"
            placeholder="이메일을 입력해주세요"
            name="email"
            onChange={props.handleChangeInputs}
          />
        </S.BodyContainer>
        <S.BodyContainer>
          <S.BodySubTitle>비밀번호</S.BodySubTitle>
          <S.BodyInput
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요(6자리 이상)"
            onChange={props.handleChangeInputs}
          />
          <S.BodyInput
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요"
            onChange={props.handleChangePassword}
          />
        </S.BodyContainer>
        <S.BodyContainer>
          <S.BodySubTitle>닉네임</S.BodySubTitle>
          <S.BodyInput
            type="text"
            placeholder="별명을 입력해주세요"
            name="name"
            onChange={props.handleChangeInputs}
          />
        </S.BodyContainer>
        <div></div>
        <S.SignupBtn onClick={props.onClickSignup} btnColor={props.btnColor}>
          버튼만 누르면 가입완료!
        </S.SignupBtn>
      </S.SignUpBody>
    </S.Wrapper>
  );
};

export default SignUpUI;
