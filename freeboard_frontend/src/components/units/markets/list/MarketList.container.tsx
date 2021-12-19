import { useRouter } from "next/router";
import MarketListUI from "./MarketList.presenter";
import { FETCH_USEDITEMS } from "./MarketList.queries";
import { useQuery } from "@apollo/client";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IBoard,
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";

const MarketList = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState<string>("");
  const [confirmSearch, setConfirm] = useState<string>("");
  const [isSoldout, setIsSoldout] = useState<boolean>(false);
  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS, { variables: { search: confirmSearch, isSoldout } });

  const getDetail = (data: IBoard) => () => {
    router.push(`market/${data._id}`);
    const todayitem =
      JSON.parse(localStorage.getItem("todayitems") || "[]") || [];
    if (todayitem.length === 5) todayitem.shift();
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

  const changeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const clickSearchValue = () => {
    setConfirm(searchValue);
    refetch({ search: confirmSearch });
  };

  const getSoldout = (event: MouseEvent<HTMLButtonElement>) => {
    setIsSoldout((event.target as HTMLInputElement).checked);
  };

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
        changeSearchValue={changeSearchValue}
        clickSearchValue={clickSearchValue}
        confirmSearch={confirmSearch}
        getSoldout={getSoldout}
      />
    </>
  );
};

export default MarketList;
