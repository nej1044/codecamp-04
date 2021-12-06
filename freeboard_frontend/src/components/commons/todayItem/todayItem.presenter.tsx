import * as S from "./todayItem.styles";
import { ITodayItemUI } from "./todayItem.types";

const TodayItemUI = (props: ITodayItemUI) => {
  return (
    <>
      <S.Wrapper>
        <S.TodayTitle>오늘 본 상품</S.TodayTitle>
        <S.ItemWrap>
          {props.todayItem.map((el: any) => (
            <S.Item key={el._id} onClick={props.getDetail(el._id)}>
              <S.ItemImg
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
