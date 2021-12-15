import { RefObject, ChangeEvent } from "react";

export interface IPropsPhotoUpload {
  result?: any;
  data?: any;
  onChangeFiles: (idx: number, url: string) => void;
  index: number;
  onClickDeletes: (idx: number) => void;
  imgUrl: string[];
  isEdit?: boolean;
}

export interface IPropsPhotoUploadUI {
  fileUrl: string;
  onClickMyImage: () => void;
  fileRef: RefObject<HTMLInputElement>;
  onClickDelete: () => void;
  onChangeFile: (evner: ChangeEvent<HTMLInputElement>) => void;
  isEdit?: boolean;
  data?: any;
  index: number;
}
