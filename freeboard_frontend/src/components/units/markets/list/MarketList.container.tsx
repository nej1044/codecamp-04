import { useRouter } from "next/router";
import MarketListUI from "./MarketList.presenter";
import { FETCH_USEDITEMS } from "./BoardList.queries";
import { useQuery } from "@apollo/client";

const MarketList = () => {
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEMS);

  const getDetail = (id) => () => {
    router.push(`market/${id}`);
  };

  const moveWrite = () => {
    router.push("/market/new");
  };

  console.log(data);
  return (
    <>
      <MarketListUI moveWrite={moveWrite} getDetail={getDetail} data={data} />
    </>
  );
};

export default MarketList;
