import { useRouter } from "next/router";
import MarketListUI from "./MarketList.presenter";

const MarketList = () => {
  const router = useRouter();

  const moveWrite = () => {
    router.push("/market/new");
  };
  return (
    <>
      <MarketListUI moveWrite={moveWrite} />
    </>
  );
};

export default MarketList;
