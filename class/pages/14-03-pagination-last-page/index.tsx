import { gql, useQuery } from "@apollo/client";
import { useState, MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;
const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

const PaginationBasicPage = () => {
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, { variables: { page: startPage } });

  const { data: fetchcounts } =
    useQuery<Pick<IQuery, "fetchBoardsCount">>(FETCH_BOARDS_COUNT);

  const lastPage = fetchcounts
    ? Math.ceil(fetchcounts.fetchBoardsCount / 10)
    : 0;

  function onClickPage(event: MouseEvent<HTMLSpanElement>) {
    if (event.target instanceof Element) {
      refetch({ page: Number(event.target.id) });
    }
  }

  const prevPage = () => {
    if (startPage <= 1) return;
    setStartPage((prev) => prev - 10);
  };

  const nextPage = () => {
    if (lastPage < startPage + 10) return;
    setStartPage((prev) => prev + 10);
  };

  return (
    <>
      <h1>페이지네이션 연습</h1>
      <div>
        {data?.fetchBoards?.map((el) => (
          <div key={el._id}>
            {el.title} {el.writer}
          </div>
        ))}
        <span onClick={prevPage} style={{ margin: "10px", cursor: "pointer" }}>
          이전 페이지
        </span>
        {new Array(10).fill(1).map(
          (_, idx) =>
            startPage + 10 <= lastPage && (
              <span
                key={idx}
                onClick={onClickPage}
                id={String(idx + 1)}
                style={{ margin: "10px", cursor: "pointer" }}
              >
                {startPage + idx}
              </span>
            )
        )}
        <span onClick={nextPage} style={{ margin: "10px", cursor: "pointer" }}>
          다음페이지
        </span>
      </div>
    </>
  );
};

export default PaginationBasicPage;
