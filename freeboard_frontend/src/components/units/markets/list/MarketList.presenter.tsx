import * as S from "./MarketList.styles";
import { HeartTwoTone } from "@ant-design/icons";
import InfiniteScroll from "react-infinite-scroller";
import TodayItem from "../../../commons/todayItem";
import { IMarketListUI } from "./MarketList.types";
import Checkbox from "@mui/material/Checkbox";
import { v4 as uuid4 } from "uuid";
import { onError } from "../../../../commons/libraries/utils";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const MarketListUI = (props: IMarketListUI) => {
  return (
    <>
      <S.ListHeader>
        <S.SellingView>
          <Checkbox
            onClick={props.getSoldout}
            {...label}
            sx={{
              color: "#8eb696",
              "&.Mui-checked": {
                color: "#8eb696",
              },
            }}
          />
          판매 완료된 프로젝트
        </S.SellingView>
        <div>
          <S.SearchInput
            type="text"
            placeholder="검색어를 입력하세요"
            onChange={props.changeSearchValue}
          />
          <S.SearchBtn onClick={props.clickSearchValue}>검색</S.SearchBtn>
        </div>
      </S.ListHeader>
      <S.Wrapper>
        <S.ListBody>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
            useWindow={false}
          >
            {props.data?.fetchUseditems.map((el: any) => (
              <S.Item
                key={el._id}
                isSoldout={el.buyer?._id}
                onClick={props.getDetail(el)}
              >
                <S.ItemImg
                  onError={onError}
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                />
                <S.ItemInfo>
                  <S.Seller>{el.seller.name}</S.Seller>
                  <S.ItemName>
                    {el.name
                      .replaceAll(
                        props.confirmSearch,
                        `%^&${props.confirmSearch}%^&`
                      )
                      .split("%^&")
                      .map((el: any) => (
                        <S.KeyTitle
                          key={uuid4()}
                          isMatched={el === props.confirmSearch}
                        >
                          {el}
                        </S.KeyTitle>
                      ))}
                  </S.ItemName>
                  <S.ItemPrice>{el.price} 원</S.ItemPrice>
                  <S.Picked>
                    <HeartTwoTone twoToneColor="#8eb696" /> {el.pickedCount}
                  </S.Picked>
                </S.ItemInfo>
                {el.buyer?._id && <S.Soldout>판매완료</S.Soldout>}
              </S.Item>
            ))}
          </InfiniteScroll>
        </S.ListBody>
        <TodayItem />
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
