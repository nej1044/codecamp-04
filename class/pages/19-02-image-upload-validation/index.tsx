import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [, setMyImages] = useState<String[]>([]);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const myFile = event.target.files?.[0];

    if (!myFile?.size) {
      alert(`파일이 없습니다.`);
      return;
    }

    if (myFile.size > 5 * 1024 * 1024) {
      alert(`5MB 미만의 파일을 업로드하십시오.`);
      return;
    }

    if (!myFile.type.includes("jpeg") && !myFile.type.includes("png")) {
      alert(`jpeg 또는 png 파일 형식만 업로드 가능합니다.`);
      return;
    }

    try {
      const result = await uploadFile({ variables: { file: myFile } });
      console.log(result.data.uploadFile.url);
      alert("사진을 업로드 하였습니다.");
      setMyImages([result.data.uploadFile.url]);
    } catch (error) {
      alert(`사진 업로드에 실패했습니다.`);
    }
  };
  return <input type="file" onChange={onChangeFile} />;
}
