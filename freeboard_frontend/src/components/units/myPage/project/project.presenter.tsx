import { HeartTwoTone } from "@ant-design/icons";
import { onError } from "../../../../commons/libraries/utils";
import * as S from "./project.styles";

const MyPageProjectUI = (props) => {
  return (
    <>
      <S.MyPageBody>
        <S.ProjectHeader>
          <S.SoldTitle onClick={props.getSold} isBought={!props.isBought}>
            내 프로젝트
          </S.SoldTitle>
          <S.SoldTitle onClick={props.getBought} isBought={props.isBought}>
            구매한 프로젝트
          </S.SoldTitle>
        </S.ProjectHeader>
        <S.ListBody>
          {!props.isBought
            ? props.fetchSold?.fetchUseditemsISold.map(
                (el: any, idx: number) => (
                  <>
                    <S.Item
                      key={el._id}
                      onClick={props.getDetail(el._id)}
                      isSoldout={el.buyer?._id}
                    >
                      <S.ItemImg
                        onError={onError}
                        src={`https://storage.googleapis.com/${el.images[0]}`}
                      />
                      <S.ItemInfo>
                        <S.Seller>{el.seller.name}</S.Seller>
                        <S.ItemName>{el.name}</S.ItemName>
                        <S.ItemPrice>{el.price} 원</S.ItemPrice>
                        <S.Picked>
                          <HeartTwoTone twoToneColor="#8eb696" />{" "}
                          {el.pickedCount}
                        </S.Picked>
                      </S.ItemInfo>
                      {el.buyer?._id && <S.Soldout>판매완료</S.Soldout>}
                    </S.Item>
                  </>
                )
              )
            : props.fetchBought?.fetchUseditemsIBought.map(
                (el: any, idx: number) => (
                  <>
                    <S.Item key={el._id} onClick={props.getDetail(el._id)}>
                      <S.ItemImg
                        onError={onError}
                        src={`https://storage.googleapis.com/${el.images[0]}`}
                      />
                      <S.ItemInfo>
                        <S.Seller>{el.seller.name}</S.Seller>
                        <S.ItemName>{el.name}</S.ItemName>
                        <S.ItemPrice>{el.price} 원</S.ItemPrice>
                        <S.Picked>
                          <HeartTwoTone twoToneColor="#8eb696" />{" "}
                          {el.pickedCount}
                        </S.Picked>
                      </S.ItemInfo>
                    </S.Item>
                  </>
                )
              )}
        </S.ListBody>
        <S.ListFooter onClick={props.onLoadMore}>더보기</S.ListFooter>
      </S.MyPageBody>
    </>
  );
};

export default MyPageProjectUI;
