import * as S from "./todayItem.styles";
import { ITodayItemUI } from "./todayItem.types";

const TodayItemUI = (props: ITodayItemUI) => {
  return (
    <>
      <S.Wrapper>
        <S.TodayTitle>오늘 본 상품</S.TodayTitle>
        <S.ItemWrap>
          {props.todayItem.slice(-6, -1).map((el: any) => (
            <S.Item key={el._id} onClick={props.getDetail(el._id)}>
              <S.ItemImg
                onError={props.onError}
                src={`https://storage.googleapis.com/${el.images[0]}`}
              />
              <S.Seller>[ {el.seller.name} ]</S.Seller>
              <S.ItemTitle>{el.name}</S.ItemTitle>
            </S.Item>
          ))}
        </S.ItemWrap>
      </S.Wrapper>
    </>
  );
};

export default TodayItemUI;
