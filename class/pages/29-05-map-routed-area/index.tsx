import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

const KakaoMapRoutedPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=d4229cbd5327d5a024d3ab1a7e618796";

    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(
            37.51906313310671,
            127.08205301988632
          ),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);

        const polygonPath = [
          new window.kakao.maps.LatLng(37.52062172059842, 127.09398503536582),
          new window.kakao.maps.LatLng(37.51990029374078, 127.09452484082864),
          new window.kakao.maps.LatLng(37.518637990213016, 127.0913639258996),
          new window.kakao.maps.LatLng(37.51749839229828, 127.08736304756285),
          new window.kakao.maps.LatLng(37.51720034074179, 127.08402529823219),
          new window.kakao.maps.LatLng(37.51742826262468, 127.07931708233087),
          new window.kakao.maps.LatLng(37.51793670124548, 127.0788749963268),
          new window.kakao.maps.LatLng(37.518237303331695, 127.077873651342),
          new window.kakao.maps.LatLng(37.51854161333734, 127.07780594506774),
          new window.kakao.maps.LatLng(37.51829100518758, 127.08046905852237),
          new window.kakao.maps.LatLng(37.518273104573254, 127.0842606098815),
          new window.kakao.maps.LatLng(37.51866691709661, 127.08730739222364),
          new window.kakao.maps.LatLng(37.51866691709661, 127.08730739222364),
          new window.kakao.maps.LatLng(37.52060014842948, 127.09387490082786),
          // new window.kakao.maps.LatLng(33.450752219367345, 126.56990001069012),
          // new window.kakao.maps.LatLng(33.45065801908533, 126.57003491859678),
          // new window.kakao.maps.LatLng(33.45063139100987, 126.57015604858434),
          // new window.kakao.maps.LatLng(33.45064506393239, 126.5701990028593),
        ];

        // 지도에 표시할 다각형을 생성합니다
        const polygon = new window.kakao.maps.Polygon({
          path: polygonPath, // 그려질 다각형의 좌표 배열입니다
          strokeWeight: 3, // 선의 두께입니다
          strokeColor: "#39DE2A", // 선의 색깔입니다
          strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle: "solid", // 선의 스타일입니다
          fillColor: "#A2FF99", // 채우기 색깔입니다
          fillOpacity: 0.7, // 채우기 불투명도 입니다
        });

        // 지도에 다각형을 표시합니다
        polygon.setMap(map);

        // 다각형에 마우스오버 이벤트가 발생했을 때 변경할 채우기 옵션입니다
        const mouseoverOption = {
          fillColor: "#EFFFED", // 채우기 색깔입니다
          fillOpacity: 0.8, // 채우기 불투명도 입니다
        };

        // 다각형에 마우스아웃 이벤트가 발생했을 때 변경할 채우기 옵션입니다
        const mouseoutOption = {
          fillColor: "#A2FF99", // 채우기 색깔입니다
          fillOpacity: 0.7, // 채우기 불투명도 입니다
        };

        // 다각형에 마우스오버 이벤트를 등록합니다
        window.kakao.maps.event.addListener(polygon, "mouseover", function () {
          // 다각형의 채우기 옵션을 변경합니다
          polygon.setOptions(mouseoverOption);
        });

        window.kakao.maps.event.addListener(polygon, "mouseout", function () {
          // 다각형의 채우기 옵션을 변경합니다
          polygon.setOptions(mouseoutOption);
        });
      });
    };
  }, []);
  return (
    <>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </>
  );
};

export default KakaoMapRoutedPage;
