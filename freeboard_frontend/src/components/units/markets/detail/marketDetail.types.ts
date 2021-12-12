import { SyntheticEvent } from "react";
import { IBoard } from "../../../../commons/types/generated/types";

export interface IMarketDetailUIProps {
  handleEdit: () => void;
  handleDelete: () => void;
  togglePick: () => void;
  data?: any;
  onClickBasket: (data: IBoard) => () => void;
  onError: (event: SyntheticEvent<HTMLImageElement>) => void;
  buyItem: (id: string) => () => void;
}
