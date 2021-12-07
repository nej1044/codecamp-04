import { useRouter } from "next/router";
import MarketListUI from "./MarketList.presenter";
import { FETCH_USEDITEMS } from "./BoardList.queries";
import { useQuery } from "@apollo/client";
import {
  IBoard,
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import { SyntheticEvent } from "react";

const MarketList = () => {
  const router = useRouter();
  // const [startPage] = useState(1);
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS);

  const getDetail = (data: IBoard) => () => {
    router.push(`market/${data._id}`);
    const todayitem =
      JSON.parse(localStorage.getItem("todayitems") || "[]") || [];

    let isExists = false;
    todayitem.forEach((itemEl: IBoard) => {
      if (data._id === itemEl._id) isExists = true;
    });
    if (isExists) return;

    const { __typename, ...newEl } = data;
    todayitem.push(newEl);
    localStorage.setItem("todayitems", JSON.stringify(todayitem));
  };

  const moveWrite = () => {
    router.push("/market/new");
  };

  const onError = (event: SyntheticEvent<HTMLImageElement>) => {
    (event.target as any).src =
      "https://reviewpro.co.kr/wp-content/uploads/2020/06/vipul-jha-a4X1cdC1QAc-unsplash-scaled.jpg";
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
        onLoadMore={onLoadMore}
        onError={onError}
      />
    </>
  );
};

export default MarketList;
