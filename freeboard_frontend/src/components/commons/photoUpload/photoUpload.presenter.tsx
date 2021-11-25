import * as S from "./photoUpload.styles";

const PhotoUploadUI = (props) => {
  return (
    <>
      <S.PhotoUpload>
        {props.images[0] ? (
          <img src={`https://storage.googleapis.com/${props.images[0]}`} />
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
    </>
  );
};

export default PhotoUploadUI;
