import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const WebEditorPage = () => {
  const handleChange = (value: string) => {};

  return (
    <>
      작성자:
      <input type="text" />
      <br />
      비밀번호: <input type="password " />
      <br />
      제목:
      <input type="text" />
      <br />
      내용: <ReactQuill onChange={handleChange} />
      <br />
      <button>등록하기</button>
    </>
  );
};

export default WebEditorPage;
