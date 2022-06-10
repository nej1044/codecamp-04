// import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
// import { useRouter } from "next/router";
import { useEffect } from "react";
import { IQuery } from "../../../commons/types/generated/types";
// import { FETCH_USEDITEM } from "../../units/markets/detail/marketDetail.queries";

declare const window: typeof globalThis & {
  kakao: any;
};

interface IMap {
  data?: Pick<IQuery, "fetchUseditem">;
}

const MapWrap = styled.div`
  @media only screen and (max-width: 600px) {
    width: 250px;
    height: 150px;
  }
  @media only screen and (min-width: 600px) {
    width: 500px;
    height: 400px;
  }
`;

const Map = (props: IMap) => {
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
          props.data?.fetchUseditem.useditemAddress?.address ||
            "서울특별시 구로구 디지털로 300",
          function (result: any, status: any) {
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
  }, []);
  return <MapWrap id="map"></MapWrap>;
};

export default Map;
