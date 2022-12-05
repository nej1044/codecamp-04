import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_PAGES } from "./BoardList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState, MouseEvent } from "react";

const BoardList = () => {
  const router = useRouter();
  // const currentBoard = useRef();
  // const [active, isActive] = useState("home");
  // const [searchValue, setSearchValue] = useState("");
  const [confirmSearch, setConfirm] = useState("");
  const [startPage, setStartPage] = useState(1);
  const [current, setCurrent] = useState(1);
  const { data: first, refetch } = useQuery(FETCH_BOARDS, {
    variables: {
      search: confirmSearch,
      page: startPage,
    },
    fetchPolicy: "network-only",
  });
  const { data: third } = useQuery(FETCH_PAGES, {
    variables: { search: confirmSearch },
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
    setConfirm(event.target.value);
  };

  // const clickSearchValue = () => {
  //   setConfirm(searchValue);
  //   refetch({ search: confirmSearch });
  // };

  // const categorySelector = (event: MouseEvent<HTMLLIElement>) => {
  //   const target = event.target as HTMLLIElement;
  //   isActive(target.id);
  //   if (target.id === "qna") {
  //     setConfirm("[질문]");
  //   } else if (target.id === "freetalk") {
  //     setConfirm("[자유주제]");
  //   } else if (target.id === "study") {
  //     setConfirm("[스터디]");
  //   } else if (target.id === "home") {
  //     setConfirm("");
  //   }
  // };

  return (
    <>
      <BoardListUI
        // clickSearchValue={clickSearchValue}
        count={third?.fetchBoardsCount}
        startPage={startPage}
        changeSearchValue={changeSearchValue}
        first={first}
        handleCreate={handleCreate}
        getDetail={getDetail}
        setStartPage={setStartPage}
        refetch={refetch}
        current={current}
        setCurrent={setCurrent}
        // categorySelector={categorySelector}
        // active={active}
        confirmSearch={confirmSearch}
      />
    </>
  );
};

export default BoardList;
