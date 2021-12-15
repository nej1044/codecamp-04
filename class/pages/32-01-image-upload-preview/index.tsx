import { ChangeEvent, useState } from "react";
// import { gql } from "@apollo/client";

// const UPLOAD_FILE = gql`
//   mutation uploadFile($file: Upload!) {
//     uploadFile(file: $file) {
//       url
//     }
//   }
// `;

const ImageUploadPreviewPage = () => {
  const [preview, setPreview] = useState("");
  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const myFile = event.target.files?.[0];
    console.log(myFile);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(myFile);
    fileReader.onload = (data) => {
      setPreview(data.target.result);
    };
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <br />
      <img src={preview} width="800px" />
    </>
  );
};

export default ImageUploadPreviewPage;
