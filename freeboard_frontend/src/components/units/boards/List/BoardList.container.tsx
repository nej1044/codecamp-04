import BoardListUI from "./BoardList.presenter";
import SideBar from "../../../commons/layout/sidebar";
import {
  FETCH_BOARDS,
  FETCH_BEST,
  FETCH_PAGES,
  FECTH_COMMENTS,
} from "./BoardList.queries";
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

  const { data: fetchComments } = useQuery(FECTH_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

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
    refetch({ search: "", page: startPage });
    setConfirm("");
    setCurrent(1);
    setStartPage(1);
  };

  return (
    <>
      <BoardListUI
        handleReset={clickSearchReset}
        clickSearchValue={clickSearchValue}
        count={third?.fetchBoardsCount}
        startPage={startPage}
        setStartPage={setStartPage}
        changeSearchValue={changeSearchValue}
        first={first}
        second={second}
        handleCreate={handleCreate}
        getDetail={getDetail}
        refetch={refetch}
        current={current}
        setCurrent={setCurrent}
        fetchComments={fetchComments}
      />
      <SideBar refetch={refetch} setConfrim={setConfirm} />
    </>
  );
};

export default BoardList;
