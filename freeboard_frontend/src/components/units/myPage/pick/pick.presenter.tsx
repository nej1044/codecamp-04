import { HeartTwoTone } from "@ant-design/icons";
import * as S from "./pick.styles";
import { IPickUI } from "./pick.types";

const PickUI = (props: IPickUI) => {
  return (
    <S.MyPageBody>
      <S.ProjectHeader>
        <S.SoldTitle>찜한 프로젝트</S.SoldTitle>
      </S.ProjectHeader>
      <S.ListBody>
        {props.data?.fetchUseditemsIPicked.map((el: any) => (
          <S.Item
            key={el._id}
            isSoldout={el.buyer?._id}
            onClick={props.getDetail(el._id)}
          >
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
            {el.buyer?._id && <S.Soldout>판매완료</S.Soldout>}
          </S.Item>
        ))}
      </S.ListBody>
      <S.ListFooter onClick={props.onLoadMore}>더보기</S.ListFooter>
    </S.MyPageBody>
  );
};

export default PickUI;
