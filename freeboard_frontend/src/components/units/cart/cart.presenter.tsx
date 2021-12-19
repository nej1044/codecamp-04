import * as S from "./cart.styles";
import { CloseOutlined } from "@ant-design/icons";
import { ICartUI } from "./cart.types";
import { onError } from "../../../commons/libraries/utils";

const CartUI = (props: ICartUI) => {
  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.HeaderTitle>장바구니</S.HeaderTitle>
          <S.Count>{props.shoppingCart.length}</S.Count>
        </S.Header>
        <S.Body>
          <S.BodyHeader>
            <S.ProductTitle>상품정보</S.ProductTitle>
            <S.BodyTitle>판매가</S.BodyTitle>
            <S.BodyTitle>판매자</S.BodyTitle>
            <S.BodyTitle>선택</S.BodyTitle>
          </S.BodyHeader>
          {props.shoppingCart.map((el: any) => (
            <S.CartItem key={el._id}>
              <S.ProductInfo onClick={props.getDetail(el._id)}>
                <S.ItemImg
                  onError={onError}
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                />
                {el.name}
              </S.ProductInfo>
              <S.ItemInfo>{el.price} 원</S.ItemInfo>
              <S.ItemInfo>{el.seller.name}</S.ItemInfo>
              <S.InfoBtnWrap>
                <S.InfoBtnBuy onClick={props.buyItem(el._id)}>
                  구매
                </S.InfoBtnBuy>
                <S.InfoBtn onClick={props.togglePick(el._id)}>
                  <S.Heart twoToneColor="8eb696" />
                  찜하기
                </S.InfoBtn>
                <S.InfoBtn onClick={props.onClickDelete(el._id)}>
                  <CloseOutlined />
                  삭제
                </S.InfoBtn>
              </S.InfoBtnWrap>
            </S.CartItem>
          ))}
        </S.Body>
      </S.Wrapper>
    </>
  );
};

export default CartUI;
