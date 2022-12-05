import axios from "axios";
import { result } from "lodash";

const GraphqlRest = () => {
  const onClickSubmit = async () => {
    const result = await axios.post(
      "https://backend09.codebootcamp.co.kr/graphql",
      {
        query: `mutation createBoard { 
                createBoard(createBoardInput: {
                    writer: "철수", 
                    password: "1234", 
                    title: "제목",
                    contents: "내용"}) {
                        _id,
                        title,
                        writer,
                        contents
                    }}`,
      }
    );
    console.log(result.data.data);
  };

  return (
    <>
      <div>
        {result.data?.data.createBoard.map((el) => (
          <div key={el._id}>
            <span>{el.title}</span>
            <span>{el.writer}</span>
            <span>{el.contents}</span>
          </div>
        ))}
      </div>
      <button onClick={onClickSubmit}>등록</button>
    </>
  );
};

export default GraphqlRest;
