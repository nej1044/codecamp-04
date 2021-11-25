import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState, useRef } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [myImages, setMyImages] = useState<string[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const myFile = event.target.files?.[0];
    try {
      const result = await uploadFile({ variables: { file: myFile } });
      console.log(result.data.uploadFile.url);
      alert("사진을 업로드 하였습니다.");
      setMyImages([result.data.uploadFile.url]);
    } catch (error) {
      alert(`사진 업로드에 실패했습니다.`);
    }
  };

  const onClickMyImage = () => {
    fileRef.current?.click();
  };

  return (
    <>
      <img src={`https://storage.googleapis.com/${myImages[0]}`} />
      <input
        ref={fileRef}
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
      />
      ;
      <div
        onClick={onClickMyImage}
        style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
      >
        이미지 선택
      </div>
    </>
  );
}
