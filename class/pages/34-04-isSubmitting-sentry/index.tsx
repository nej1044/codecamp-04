import { useState, ChangeEvent } from "react";
import { useMutation, gql } from "@apollo/client";
import * as Sentry from "@sentry/nextjs";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../src/commons/types/generated/types";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

const defaultInputs = {
  writer: "",
  password: "",
  title: "",
  contents: "",
};

const IsSubmittingPage = () => {
  //   const {formState} = useForm()
  //   formState.isSubmitting
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [input, setInput] = useState(defaultInputs);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onChangeInput =
    (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setInput((prev) => ({ ...prev, [name]: event.target.value }));
    };

  const onClickSubmit = async () => {
    setIsSubmitting(true);
    try {
      throw new Error("에러다");
      // const result = await createBoard({
      //   variables: {
      //     createBoardInput: {
      //       ...input,
      //     },
      //   },
      // });
      // console.log(result);
    } catch (error) {
      alert(error.message);
      Sentry.captureException(error);
    }
    setTimeout(() => setIsSubmitting(false), 3000);
  };

  return (
    <>
      작성자: <input type="text" onChange={onChangeInput("writer")} />
      <br />
      비밀번호: <input type="password" onChange={onChangeInput("password")} />
      <br />
      제목: <input type="text" onChange={onChangeInput("title")} />
      <br />
      내용: <input type="text" onChange={onChangeInput("contents")} />
      <br />
      <button onClick={onClickSubmit} disabled={isSubmitting}>
        등록
      </button>
    </>
  );
};

export default IsSubmittingPage;
