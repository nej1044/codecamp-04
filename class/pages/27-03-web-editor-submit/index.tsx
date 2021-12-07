import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../src/commons/types/generated/types";
import { useRouter } from "next/router";
import { Modal } from "antd";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

interface FormValues {
  writer: string;
  password: string;
  title: string;
  contents: string;
}

const WebEditorSubmitPage = () => {
  const router = useRouter();
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const handleChange = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onClickSubmit = async (data: FormValues) => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      router.push(`/27-04-web-editor-detail/${result.data?.createBoard._id}`);
    } catch (error) {
      Modal.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자:
      <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목:
      <input type="text" {...register("title")} />
      <br />
      내용: <ReactQuill onChange={handleChange} />
      <br />
      <button>등록하기</button>
    </form>
  );
};

export default WebEditorSubmitPage;
