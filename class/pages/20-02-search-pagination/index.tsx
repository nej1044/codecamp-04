import { useQuery, gql } from "@apollo/client";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import { v4 as uuid4 } from "uuid";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;
const SearchPage = () => {
  const [keyword, setKeyWord] = useState("");
  const [search, setSearch] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, { variables: { search, page: 1 } });

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyWord(event.target.value);
  };
  const onClickSearch = () => {
    // keyword로 fetchBoard 요청하기
    setSearch(keyword);
    refetch({ search, page: 1 });
  };

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (event.target instanceof Element)
      refetch({
        search: keyword,
        page: Number(event.target.id),
      });
  };

  return (
    <>
      <h1>검색 페이지</h1>
      검색어 입력:
      <input type="text" onChange={onChangeSearch} />
      <button onClick={onClickSearch}>검색</button>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ paddingRight: "50px" }}>{el.writer}</span>
          <span style={{ paddingRight: "50px" }}>{el.title}</span>
          <span style={{ paddingRight: "50px" }}>{el.createdAt}</span>
        </div>
      ))}
      {new Array(10).fill(1).map((_, idx) => (
        <span key={uuid4()} onClick={onClickPage} id={String(idx + 1)}>
          {idx + 1}
        </span>
      ))}
    </>
  );
};

export default SearchPage;
