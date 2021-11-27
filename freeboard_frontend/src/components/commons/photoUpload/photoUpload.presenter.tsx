import * as S from "./photoUpload.styles";

const PhotoUploadUI = (props) => {
  return (
    <>
      {!props.isEdit && (
        <S.PhotoUpload>
          {props.fileUrl ? (
            <S.InsertedImg
              onClick={props.onClickMyImage}
              src={`https://storage.googleapis.com/${props.fileUrl}`}
            />
          ) : (
            <S.Photo onClick={props.onClickMyImage}>upload</S.Photo>
          )}
          <input
            ref={props.fileRef}
            style={{ display: "none" }}
            type="file"
            onChange={props.onChangeFile}
          />
        </S.PhotoUpload>
      )}
      {props.isEdit && (
        <S.PhotoUpload>
          {props.fileUrl ? (
            <S.InsertedImg
              onClick={props.onClickMyImage}
              src={`https://storage.googleapis.com/${props.fileUrl}`}
            />
          ) : (
            <S.InsertedImg
              onClick={props.onClickMyImage}
              src={`https://storage.googleapis.com/${
                props.data?.fetchBoard.images[props.index]
              }`}
            />
          )}
          <input
            ref={props.fileRef}
            style={{ display: "none" }}
            type="file"
            onChange={props.onChangeFile}
          />
        </S.PhotoUpload>
      )}
    </>
  );
};

export default PhotoUploadUI;
