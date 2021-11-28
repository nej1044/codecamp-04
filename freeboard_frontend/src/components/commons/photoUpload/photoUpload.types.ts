import { SetStateAction, Dispatch, RefObject, ChangeEvent } from "react";
import { IFileManager } from "../../../commons/types/generated/types";

export interface IPropsPhotoUpload {
  result?: any;
  data?: any;
  uploadFile: IFileManager | undefined;
  url: string | undefined;
  setTemp: Dispatch<SetStateAction<Array<string | undefined>>>;
  onChangeFiles: (idx: number, url: string) => void;
  index: number;
  onClickDeletes: (idx: number) => void;
  imgUrl: string[];
  isEdit: boolean;
}

export interface IPropsPhotoUploadUI {
  fileUrl: string;
  onClickMyImage: () => void;
  fileRef: RefObject<HTMLInputElement>;
  onClickDelete: () => void;
  onChangeFile: (evner: ChangeEvent<HTMLInputElement>) => void;
  isEdit: boolean;
  data?: any;
  index: number;
}
