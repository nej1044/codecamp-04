import * as S from "./MarketList.styles";
import { HeartTwoTone } from "@ant-design/icons";
import InfiniteScroll from "react-infinite-scroller";
import TodayItem from "../../../commons/todayItem/todayItem.container";
import { IMarketListUI } from "./BoardList.types";

const MarketListUI = (props: IMarketListUI) => {
  return (
    <>
      <S.Wrapper>
        <TodayItem />
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
        <S.ListBody>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
            useWindow={false}
          >
            {props.data?.fetchUseditems.map((el: any) => (
              <S.Item key={el._id} onClick={props.getDetail(el)}>
                <S.ItemImg
                  onError={props.onError}
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                />
                <S.ItemInfo>
                  <S.Seller>{el.seller.name}</S.Seller>
                  <S.ItemName>{el.name}</S.ItemName>
                  <S.ItemPrice>{el.price} 원</S.ItemPrice>
                  <S.Picked>
                    <HeartTwoTone twoToneColor="#8eb696" /> {el.pickedCount}
                  </S.Picked>
                </S.ItemInfo>
              </S.Item>
            ))}
          </InfiniteScroll>
        </S.ListBody>
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
