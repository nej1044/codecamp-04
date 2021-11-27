import { ChangeEvent, useRef } from "react";
import { useMutation } from "@apollo/client";
import { UPLOAD_FILE } from "./photoUpload.queries";
import PhotoUploadUI from "./photoUpload.presenter";
import { IPropsPhotoUpload } from "./photoUpload.types";

const PhotoUpload = (props: IPropsPhotoUpload) => {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const fileRef = useRef<HTMLInputElement>(null);

  const onClickMyImage = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);
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
      props.onChangeFiles(props.index, result.data.uploadFile.url);
    } catch (error) {
      alert(`이미지 업로드에 실패하였습니다${error.message}`);
    }
  };
  // try {
  //   const result = await uploadFile({ variables: { file } });
  //   alert("사진을 업로드 하였습니다.");
  //   setImages([result?.data?.uploadFile?.url]);
  //   if(props.temp.length === 3) {
  //     props.temp.filter()
  //   }
  //   props.setTemp((prev) => [...prev, result.data.uploadFile.url]);
  // } catch (error) {
  //   alert(`사진 업로드에 실패했습니다.`);
  // }

  return (
    <PhotoUploadUI
      onChangeFile={onChangeFile}
      onClickMyImage={onClickMyImage}
      fileRef={fileRef}
      fileUrl={props.imgUrl[props.index]}
      isEdit={props.isEdit}
      data={props.data}
      index={props.index}
    />
  );
};

export default PhotoUpload;
