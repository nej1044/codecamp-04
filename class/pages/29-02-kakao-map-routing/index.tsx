import { useRouter } from "next/router";

const KakaoMapRoutingPage = () => {
  const router = useRouter();

  const routerMap = () => {
    router.push("29-03-kakao-map-routed");
  };
  return (
    <>
      <button onClick={routerMap}>카카오지도</button>
    </>
  );
};

export default KakaoMapRoutingPage;
