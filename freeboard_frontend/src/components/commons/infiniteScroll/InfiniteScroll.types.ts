import { ChangeEvent, MouseEvent, SetStateAction } from "react";

export interface IMyVariables {
  updateBoardCommentInput: IMyInputVariables;
  password: string | null;
  boardCommentId: string;
}

export interface IMyInputVariables {
  rating?: number;
  contents?: string;
}
