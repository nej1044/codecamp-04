import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { SyntheticEvent, useEffect } from "react";
import {
  IBoard,
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import MarketDetailUI from "./marketDetail.presenter";
import {
  FETCH_USEDITEM,
  DELETE_USEDITEM,
  TOGGLE_USEDITEM_PICK,
  BUY_USEDITEM,
} from "./marketDetail.queries";

declare const window: typeof globalThis & {
  kakao: any;
};

const MarketDetail = () => {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchUseditem">>(FETCH_USEDITEM, {
    variables: { useditemId: router.query.useditemId },
  });
  const [deleteUseditem] = useMutation(DELETE_USEDITEM);
  const [toggleUseditemPick] = useMutation(TOGGLE_USEDITEM_PICK);
  const [buyUseditem] = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(BUY_USEDITEM);

  // 수정으로 이동
  const handleEdit = () => {
    router.push(`/market/${router.query.useditemId}/edit`);
  };

  // 게시글 삭제
  const handleDelete = async () => {
    try {
      await deleteUseditem({
        variables: { useditemId: router.query.useditemId },
      });
      alert("게시물을 삭제했습니다.");
      router.push(`/market`);
    } catch (error: any) {
      alert(`게시물 삭제에 실패했습니다 ${error.message}`);
    }
  };

  // 장바구니에 담기
  const onClickBasket = (data: IBoard) => () => {
    const basket = JSON.parse(localStorage.getItem("baskets") || "[]") || [];

    let isExists = false;
    basket.forEach((basketEl: IBoard) => {
      if (data._id === basketEl._id) isExists = true;
    });
    if (isExists) {
      alert("이미 장바구니에 담았습니다.");
      return;
    }

    const { __typename, ...newEl } = data;
    basket.push(newEl);
    localStorage.setItem("baskets", JSON.stringify(basket));
    alert("장바구니에 담았습니다.");
  };

  // 찜하기
  const togglePick = async () => {
    await toggleUseditemPick({
      variables: { useditemId: router.query.useditemId },
      refetchQueries: [
        {
          query: FETCH_USEDITEM,
          variables: { useditemId: router.query.useditemId },
        },
      ],
    });
  };

  const onError = (event: SyntheticEvent<HTMLImageElement>) => {
    (event.target as any).src =
      "https://reviewpro.co.kr/wp-content/uploads/2020/06/vipul-jha-a4X1cdC1QAc-unsplash-scaled.jpg";
  };

  // 구매하기
  const buyItem = (id: string) => async () => {
    await buyUseditem({
      variables: { useritemId: id },
    });
    alert("프로젝트를 구매하셨습니다.");
  };

  // 지도
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=d4229cbd5327d5a024d3ab1a7e618796&libraries=services";

    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(
            37.49803863699234,
            127.02763189742201
          ),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);

        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(
          data?.fetchUseditem.useditemAddress.address,
          function (result, status) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              const infowindow = new window.kakao.maps.InfoWindow({
                content:
                  '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>',
              });
              infowindow.open(map, marker);

              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [data]);
  return (
    <MarketDetailUI
      data={data}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      onClickBasket={onClickBasket}
      togglePick={togglePick}
      onError={onError}
      buyItem={buyItem}
    />
  );
};

export default MarketDetail;
