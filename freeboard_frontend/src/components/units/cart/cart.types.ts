import { SyntheticEvent } from "react";

export interface ICartUI {
  shoppingCart: any;
  getDetail: (id: string) => () => void;
  onClickDelete: (id: string) => () => void;
  onError: (event: SyntheticEvent<HTMLImageElement>) => void;
  buyItem: (id: string) => () => void;
  togglePick: (id: string) => () => void;
}
