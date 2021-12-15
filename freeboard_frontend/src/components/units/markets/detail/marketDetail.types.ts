import { IBoard, IQuery } from "../../../../commons/types/generated/types";

export interface IMarketDetailUIProps {
  handleEdit: () => void;
  handleDelete: () => void;
  togglePick: () => void;
  data?: Pick<IQuery, "fetchUseditem">;
  fetchUser?: Pick<IQuery, "fetchUserLoggedIn">;
  onClickBasket: (data: IBoard) => () => void;
  buyItem: (id: string) => () => void;
}
