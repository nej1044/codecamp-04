import { ChangeEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      images
    }
  }
`;

const ImageUploadPreviewPage = () => {
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [preview, setPreview] = useState("");
  const [myImage, setMyImage] = useState("");
  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const myFile = event.target.files?.[0];

    const fileReader = new FileReader();
    fileReader.readAsDataURL(myFile);
    fileReader.onload = (data) => {
      setPreview(data.target.result);
      setMyImage(myFile);
    };
  };

  const onClickSubmit = async () => {
    if (!myImage) return;

    if (myImage) {
      const result = await uploadFile({ variables: { file: myImage } });

      const board = await createBoard({
        variables: {
          createBoardInput: {
            writer: "은정",
            password: "1234",
            title: "이미지업로드",
            contents: "이미지업로드 연습",
            images: [result.data?.uploadFile.url],
          },
        },
      });
      console.log(board);
    }
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <br />
      <img src={preview} width="800px" />
      <button onClick={onClickSubmit}>등록</button>
    </>
  );
};

export default ImageUploadPreviewPage;
