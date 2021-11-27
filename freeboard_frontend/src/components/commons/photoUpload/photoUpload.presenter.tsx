import * as S from "./photoUpload.styles";

const PhotoUploadUI = (props) => {
  return (
    <>
      <S.PhotoUpload>
        {props.fileUrl ? (
          <S.InsertedImg
            onClick={props.onClickMyImage}
            src={`https://storage.googleapis.com/${props.fileUrl}`}
          />
        ) : (
          <S.Photo onClick={props.onClickMyImage}>upload</S.Photo>
        )}
        <S.CloseCircle onClick={props.onClickDelete} />
        <input
          ref={props.fileRef}
          style={{ display: "none" }}
          type="file"
          onChange={props.onChangeFile}
        />
      </S.PhotoUpload>
    </>
  );
};

export default PhotoUploadUI;
