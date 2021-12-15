import { ChangeEvent, useRef } from "react";
import { useMutation } from "@apollo/client";
import { UPLOAD_FILE } from "./photoUpload01.queries";
import PhotoUploadUI from "./photoUpload01.presenter";
import { IPropsPhotoUpload } from "./photoUpload01.types";

const PhotoUpload = (props: IPropsPhotoUpload) => {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const fileRef = useRef<HTMLInputElement>(null);

  const onClickMyImage = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file?.size) {
      alert("파일이 없습니다.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert(`5MB 미만의 파일을 업로드하십시오.`);
      return;
    }

    if (!file.type.includes("jpeg") && !file.type.includes("png")) {
      alert(`jpeg 또는 png 파일 형식만 업로드 가능합니다.`);
      return;
    }

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFiles(props.index, result?.data.uploadFile.url);
    } catch (error: any) {
      alert(`이미지 업로드에 실패하였습니다${error.message}`);
    }
  };
  const onClickDelete = () => {
    props.onClickDeletes(props.index);
  };

  return (
    <PhotoUploadUI
      onChangeFile={onChangeFile}
      onClickMyImage={onClickMyImage}
      fileRef={fileRef}
      fileUrl={props.imgUrl[props.index]}
      index={props.index}
      onClickDelete={onClickDelete}
    />
  );
};

export default PhotoUpload;
