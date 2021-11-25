import { gql, useMutation } from "@apollo/client";
import { ChangeEvent } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const myFile = event.target.files?.[0];
    try {
      const result = await uploadFile({ variables: { file: myFile } });
      console.log(result.data.uploadFile.url);
      alert("사진을 업로드 하였습니다.");
    } catch (error) {
      alert(`사진 업로드에 실패했습니다.`);
    }
  };
  return <input type="file" onChange={onChangeFile} />;
}
