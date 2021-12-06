import { useRouter } from "next/router";
import MarketListUI from "./MarketList.presenter";
import { FETCH_USEDITEMS } from "./BoardList.queries";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";

const MarketList = () => {
  const router = useRouter();
  const [startPage] = useState(1);
  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS, { variables: { page: startPage } });

  const getDetail = (id) => () => {
    router.push(`market/${id}`);
  };

  const moveWrite = () => {
    router.push("/market/new");
  };

  // lodemore
  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };
  return (
    <>
      <MarketListUI
        moveWrite={moveWrite}
        getDetail={getDetail}
        data={data}
        refetch={refetch}
        fetchMore={fetchMore}
        onLoadMore={onLoadMore}
      />
    </>
  );
};

export default MarketList;
