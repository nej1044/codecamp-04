import * as S from "./signup.styles";
import { IPropsSignupUI } from "./signup.types";

const SignUpUI = (props: IPropsSignupUI) => {
  return (
    <S.Wrapper>
      <S.Logo onClick={props.moveHome}>
        codecamp
        <div style={{ fontSize: "16px", textAlign: "center" }}>그라운드</div>
      </S.Logo>
      <S.SignUpBody>
        <S.BodyTitle>딱 이것만 체크하면 가입완료!</S.BodyTitle>
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
        <S.SignupBtn
          type="button"
          value="버튼만 누르면 가입완료!"
          onClick={props.onClickSignup}
          disabled={props.btnColor}
          btnColor={props.btnColor}
        />
        <div></div>
      </S.SignUpBody>
    </S.Wrapper>
  );
};

export default SignUpUI;
