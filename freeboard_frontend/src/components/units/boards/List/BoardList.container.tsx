import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BEST, FETCH_PAGES } from "./BoardList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState, MouseEvent } from "react";

const BoardList = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [confirmSearch, setConfirm] = useState("");
  const [startPage, setStartPage] = useState(1);
  const [current, setCurrent] = useState(1);
  const { data: first, refetch } = useQuery(FETCH_BOARDS, {
    variables: {
      search: confirmSearch,
      page: startPage,
    },
  });
  const { data: second } = useQuery(FETCH_BEST);
  const { data: third } = useQuery(FETCH_PAGES, {
    variables: { search: confirmSearch },
  });
  const lastPage = Math.ceil(third?.fetchBoardsCount / 10);

  const handleCreate = () => {
    router.push("/boards/new");
  };

  const getDetail = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget as HTMLDivElement;
    try {
      router.push(`/boards/${target.id}`);
    } catch (error: any) {
      alert(error.message);
    }
  };

  const changeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const clickSearchValue = () => {
    setConfirm(searchValue);
    refetch({ search: confirmSearch });
  };

  const clickSearchReset = () => {
    refetch({ search: "", page: undefined });
    setCurrent(1);
    setStartPage(1);
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    setCurrent(current - 10);
  };

  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    setCurrent(current + 10);
  };

  const onClickPage = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    refetch({
      page: Number(target.id),
    });
    setCurrent(Number(target.id));
  };
  return (
    <>
      <BoardListUI
        handleReset={clickSearchReset}
        clickSearchValue={clickSearchValue}
        startPage={startPage}
        current={current}
        lastPage={lastPage}
        onClickPage={onClickPage}
        changeSearchValue={changeSearchValue}
        first={first}
        second={second}
        handleCreate={handleCreate}
        getDetail={getDetail}
        onClickPrevPage={onClickPrevPage}
        onClickNextPage={onClickNextPage}
      />
    </>
  );
};

export default BoardList;
