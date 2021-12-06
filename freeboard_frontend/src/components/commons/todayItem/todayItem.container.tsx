import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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

  return <TodayItemUI todayItem={todayItem} getDetail={getDetail} />;
};

export default TodayItem;
