import * as S from "./marketDetail.styles";
import { HeartTwoTone } from "@ant-design/icons";
import Dompurify from "dompurify";
import { IMarketDetailUIProps } from "./marketDetail.types";
import { onError } from "../../../../commons/libraries/utils";
import Map from "../../../commons/map";

const MarketDetailUI = (props: IMarketDetailUIProps) => {
  return (
    <>
      <S.Wrapper>
        <S.DetailHeader>
          <S.HeaderImg
            onError={onError}
            src={`https://storage.googleapis.com/${props.data?.fetchUseditem?.images?.[0]}`}
          />
          <S.HeaderText>
            <S.HeaderEdit>
              {props.data?.fetchUseditem.seller?._id ===
              props.fetchUser?.fetchUserLoggedIn._id ? (
                <S.TopWrapper>
                  <S.TopText onClick={props.handleEdit}>수정</S.TopText>
                  <S.TopText onClick={props.handleDelete}>삭제</S.TopText>
                </S.TopWrapper>
              ) : (
                <div></div>
              )}
              <S.Picked onClick={props.togglePick}>
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
                  <S.Buy
                    onClick={props.buyItem(
                      String(props.data?.fetchUseditem._id)
                    )}
                  >
                    구매하기
                  </S.Buy>
                </S.BuyBtnWrap>
              </S.BuyWrapper>
            </S.HeaderDetail>
          </S.HeaderText>
        </S.DetailHeader>
        <S.DetailBody>
          <S.BodyHeader>
            <S.Title>서비스 설명</S.Title>
            {process.browser ? (
              <S.HeaderContents
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(
                    String(props.data?.fetchUseditem.contents)
                  ),
                }}
              />
            ) : (
              <div></div>
            )}
            <S.PhotoWrapper>
              {props.data?.fetchUseditem.images?.map((el: any, idx: any) => (
                <S.Photo
                  key={idx}
                  onError={onError}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}
            </S.PhotoWrapper>
          </S.BodyHeader>
          <S.BodyHeader>
            <S.Title>사무실 위치</S.Title>
            <Map data={props.data} />
          </S.BodyHeader>
          <S.Tags>
            {props.data?.fetchUseditem.tags?.map((el: any, idx: number) => (
              <span key={idx}>{el}</span>
            ))}
          </S.Tags>
        </S.DetailBody>
      </S.Wrapper>
    </>
  );
};

export default MarketDetailUI;
