import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const WebEditorWithHookFormPage = () => {
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const handleChange = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  return (
    <>
      작성자:
      <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password " {...register("password")} />
      <br />
      제목:
      <input type="text" {...register("title")} />
      <br />
      내용: <ReactQuill onChange={handleChange} />
      <br />
      <button>등록하기</button>
    </>
  );
};

export default WebEditorWithHookFormPage;
