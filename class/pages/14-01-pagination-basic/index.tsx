import { gql, useQuery } from "@apollo/client";
import { MouseEvent } from "react";
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
const PaginationBasicPage = () => {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, { variables: { page: 1 } });

  function onClickPage(event: MouseEvent<HTMLSpanElement>) {
    const target = event.target as HTMLSpanElement;
    refetch({ page: Number(target.id) });
  }

  console.log(data);
  return (
    <>
      <h1>페이지네이션 연습</h1>
      <div>
        {data?.fetchBoards?.map((el) => (
          <div key={el._id}>
            {el.title} {el.writer}
          </div>
        ))}
        {new Array(10).fill(1).map((el, idx) => (
          <span
            key={el}
            onClick={onClickPage}
            id={String(idx + 1)}
            style={{ margin: "10px", cursor: "pointer" }}
          >
            {idx + 1}
          </span>
        ))}
        {/* <span>
          <span onClick={onClickPage} id="1">
            1
          </span>
          <span onClick={onClickPage} id="2">
            2
          </span>
          <span onClick={onClickPage} id="3">
            3
          </span> */}
        {/* {new Array(10).fill(1).map(
            (_, index) =>
              startPage + index <= lastPage && (
                <S.Pages
                  key={startPage + index}
                  onClick={onClickPage}
                  id={String(startPage + index)}
                >
                  {startPage + index}
                </S.Pages>
              )
          )} */}
        {/* </span> */}
      </div>
    </>
  );
};

export default PaginationBasicPage;
