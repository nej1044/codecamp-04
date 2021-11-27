import { SetStateAction, Dispatch } from "react";
import { IFileManager } from "../../../commons/types/generated/types";

export interface IPropsPhotoUpload {
  result?: any;
  data?: any;
  uploadFile: IFileManager | undefined;
  url: string | undefined;
  setTemp: Dispatch<SetStateAction<Array<string | undefined>>>;
}
