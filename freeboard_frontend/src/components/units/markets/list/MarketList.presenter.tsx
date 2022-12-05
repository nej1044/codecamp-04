import * as S from "./MarketList.styles";
import { HeartTwoTone, SearchOutlined } from "@ant-design/icons";
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
              color: "black",
              "&.Mui-checked": {
                color: "black",
              },
            }}
          />
          판매 완료된 상품
        </S.SellingView>
        <S.HeaderForm>
          <SearchOutlined />
          <S.SearchInput
            onChange={props.changeSearchValue}
            type="text"
            placeholder="오픈마켓 내에서 검색해보세요"
          />
          {/* <S.HeaderBtn onClick={props.clickSearchValue}>검색</S.HeaderBtn> */}
        </S.HeaderForm>
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
                    <HeartTwoTone twoToneColor="#ffd301" /> {el.pickedCount}
                  </S.Picked>
                </S.ItemInfo>
                {el.buyer?._id && <S.Soldout>판매완료</S.Soldout>}
              </S.Item>
            ))}
          </InfiniteScroll>
        </S.ListBody>
        <div style={{ position: "absolute", right: "3%" }}>
          <TodayItem />
        </div>
      </S.Wrapper>
      <S.Footer>
        <S.FooterTitle>코캠러와 함께 따뜻한 거래를 해보세요!</S.FooterTitle>
        <S.FooterBtn onClick={props.moveWrite}>상품 등록하기</S.FooterBtn>
      </S.Footer>
    </>
  );
};

export default MarketListUI;
