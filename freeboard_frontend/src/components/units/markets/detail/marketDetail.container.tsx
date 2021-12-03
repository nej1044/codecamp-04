import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery } from "../../../../commons/types/generated/types";
import MarketDetailUI from "./marketDetail.presenter";
import { FETCH_USEDITEM } from "./marketDetail.queries";

const MarketDetail = () => {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchUseditem">>(FETCH_USEDITEM, {
    variables: { useditemId: router.query.useditemId },
  });

  console.log(data);
  return <MarketDetailUI data={data} />;
};

export default MarketDetail;
