import BoardListUI from "./BoardList.presenter";
import SideBar from "../../../commons/layout/sidebar";
import { FETCH_BOARDS, FETCH_PAGES, FECTH_COMMENTS } from "./BoardList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState, MouseEvent, useRef } from "react";
import { ContactsOutlined } from "@ant-design/icons";

const BoardList = () => {
  const router = useRouter();
  // const currentBoard = useRef();
  const [active, isActive] = useState("home");
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
  const { data: third } = useQuery(FETCH_PAGES, {
    variables: { search: confirmSearch },
  });
  // const { data: fetchComments } = useQuery(FECTH_COMMENTS, {
  //   variables: { boardId: currentBoard.current?.id },
  // });
  // const commentsCount = fetchComments?.fetchBoardComments.length;

  // console.log();
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

  const categorySelector = (event: MouseEvent<HTMLLIElement>) => {
    const target = event.target as HTMLLIElement;
    isActive(target.id);
    if (target.id === "qna") {
      refetch({ search: "질문" });
    } else if (target.id === "freetalk") {
      refetch({ search: "자유주제" });
    } else if (target.id === "study") {
      refetch({ search: "스터디" });
    } else if (target.id === "home") {
      refetch({ search: "" });
    }
  };
  return (
    <>
      <BoardListUI
        clickSearchValue={clickSearchValue}
        count={third?.fetchBoardsCount}
        startPage={startPage}
        setStartPage={setStartPage}
        changeSearchValue={changeSearchValue}
        first={first}
        handleCreate={handleCreate}
        getDetail={getDetail}
        refetch={refetch}
        current={current}
        setCurrent={setCurrent}
        fetchComments={fetchComments}
        categorySelector={categorySelector}
        active={active}
        idx={idx}
        currentBoard={currentBoard}
        commentsCount={commentsCount}
      />
    </>
  );
};

export default BoardList;
