import * as S from "./MarketList.styles";

const MarketListUI = (props) => {
  return (
    <>
      <S.Wrapper>
        <S.ListHeader>
          <tbody>
            <tr>
              <S.HeaderTitle>기술 수준</S.HeaderTitle>
              <S.HeaderContents>초급</S.HeaderContents>
              <S.HeaderContents>중급</S.HeaderContents>
              <S.HeaderContents>고급</S.HeaderContents>
            </tr>
            <tr>
              <S.HeaderTitle>팀 규모</S.HeaderTitle>
              <S.HeaderContents>1인</S.HeaderContents>
              <S.HeaderContents>2인 이상 5인 미만</S.HeaderContents>
              <S.HeaderContents>5인 이상 30인 미만</S.HeaderContents>
              <S.HeaderContents>30인 이상</S.HeaderContents>
            </tr>
            <tr>
              <S.HeaderTitle>상주 여부</S.HeaderTitle>
              <S.HeaderContents>상주 가능</S.HeaderContents>
              <S.HeaderContents>상주 불가능</S.HeaderContents>
            </tr>
            <tr>
              <S.HeaderTitle>선택한 필터</S.HeaderTitle>
            </tr>
          </tbody>
        </S.ListHeader>
      </S.Wrapper>
      <S.Footer>
        <S.FooterTitle>
          프로젝트 의뢰하고 딱 맞는 전문가를 만나보세요!
        </S.FooterTitle>
        <S.FooterBtn onClick={props.moveWrite}>프로젝트 의뢰하기</S.FooterBtn>
      </S.Footer>
    </>
  );
};

export default MarketListUI;
