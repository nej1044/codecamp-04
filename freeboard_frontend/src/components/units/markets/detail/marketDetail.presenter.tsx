import * as S from "./marketDetail.styles";
import { HeartTwoTone } from "@ant-design/icons";

const MarketDetailUI = (props) => {
  return (
    <>
      <S.Wrapper>
        <S.DetailHeader>
          <S.HeaderImg
            src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`}
          />
          <S.HeaderText>
            <S.HeaderEdit>
              <S.TopWrapper>
                <S.TopText onClick={props.handleEdit}>수정</S.TopText>
                <S.TopText onClick={props.handleDelete}>삭제</S.TopText>
              </S.TopWrapper>
              <S.Picked>
                <HeartTwoTone twoToneColor="#8eb696" /> 찜하기{" "}
                {props.data?.fetchUseditem.pickedCount}
              </S.Picked>
            </S.HeaderEdit>
            <S.HeaderTitle>{props.data?.fetchUseditem.name}</S.HeaderTitle>
            <S.HeaderDetail>
              <S.Price>{props.data?.fetchUseditem.price} 원</S.Price>
              <S.BuyWrapper>
                <S.Remarks>{props.data?.fetchUseditem.remarks}</S.Remarks>
                <S.BuyBtnWrap>
                  <S.Cart
                    onClick={props.onClickBasket(props.data?.fetchUseditem)}
                  >
                    장바구니
                  </S.Cart>
                  <S.Buy>구매하기</S.Buy>
                </S.BuyBtnWrap>
              </S.BuyWrapper>
            </S.HeaderDetail>
          </S.HeaderText>
        </S.DetailHeader>
        <S.DetailBody>
          <S.BodyHeader>
            <S.Title>서비스 설명</S.Title>
            <S.HeaderContents>
              {props.data?.fetchUseditem.contents}
            </S.HeaderContents>
            <S.PhotoWrapper>
              {props.data?.fetchUseditem.images.map((el: any, idx: any) => (
                <S.Photo
                  key={idx}
                  onError={props.imgError}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}
            </S.PhotoWrapper>
          </S.BodyHeader>

          <S.Tags>
            {props.data?.fetchUseditem.tags.map((el, idx) => (
              <span key={idx}>{el}</span>
            ))}
          </S.Tags>
        </S.DetailBody>
      </S.Wrapper>
    </>
  );
};

export default MarketDetailUI;
