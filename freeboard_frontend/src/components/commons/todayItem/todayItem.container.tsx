import { useRouter } from "next/router";
import { SyntheticEvent, useEffect, useState } from "react";
import TodayItemUI from "./todayItem.presenter";

const TodayItem = () => {
  const router = useRouter();
  const [todayItem, setTodayItem] = useState([]);

  useEffect(() => {
    setTodayItem(JSON.parse(localStorage.getItem("todayitems") || "[]"));
  }, []);

  const getDetail = (id: String) => () => {
    router.push(`market/${id}`);
  };

  const onError = (event: SyntheticEvent<HTMLImageElement>) => {
    (event.target as any).src =
      "https://reviewpro.co.kr/wp-content/uploads/2020/06/vipul-jha-a4X1cdC1QAc-unsplash-scaled.jpg";
  };

  return (
    <TodayItemUI
      todayItem={todayItem}
      getDetail={getDetail}
      onError={onError}
    />
  );
};

export default TodayItem;
