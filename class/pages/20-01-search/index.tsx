import { useQuery, gql } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String) {
    fetchBoards(search: $search) {
      _id
      writer
      title
      createdAt
    }
  }
`;
const SearchPage = () => {
  const [keyword, setKeyWord] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, { variables: { search: keyword } });

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyWord(event.target.value);
  };
  const onClickSearch = () => {
    // keyword로 fetchBoard 요청하기
    refetch({ search: keyword });
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
    </>
  );
};

export default SearchPage;
