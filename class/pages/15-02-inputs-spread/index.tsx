import { useMutation, gql } from "@apollo/client";
import { MouseEvent, useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

const InputsSpreadPage = () => {
  const [createBoard] = useMutation(CREATE_BOARD);
  const [myInputs, setMyInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });
  //   const [myWriter, setMyWriter] = useState("");
  //   const [myTitle, setMyTitle] = useState("");
  //   const [myContents, setMyContents] = useState("");

  const onChangeMyInputs = (event: MouseEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setMyInputs({
      ...myInputs,
      [target.name]: target.value,
    });
  };

  //   function onChangeMyWriter(event) {
  //     setMyWriter(event.target.value);
  //   }

  //   function onChangeMyTitle(event) {
  //     setMyTitle(event.target.value);
  //   }

  //   function onChangeMyContents(event) {
  //     setMyContents(event.target.value);
  //   }

  // 함수
  async function zzz() {
    const result = await createBoard({
      variables: { ...myInputs },
    });
    console.log(result);
    console.log(result.data.createBoard.message);
  }
  return (
    <>
      작성자: <input name="writer" type="text" onChange={onChangeMyInputs} />
      <br />
      제목: <input name="title" type="text" onChange={onChangeMyInputs} />
      <br />
      내용: <input name="contents" type="text" onChange={onChangeMyInputs} />
      <br />
      <button onClick={zzz}>게시물 등록</button>
    </>
  );
};

export default InputsSpreadPage;
