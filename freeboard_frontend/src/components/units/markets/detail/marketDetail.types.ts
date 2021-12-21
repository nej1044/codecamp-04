import { IQuery } from "../../../../commons/types/generated/types";

export interface IMarketDetailUIProps {
  handleEdit: () => void;
  handleDelete: () => void;
  togglePick: () => void;
  data?: Pick<IQuery, "fetchUseditem">;
  fetchUser?: Pick<IQuery, "fetchUserLoggedIn">;
  onClickBasket: (data: any) => () => void;
  buyItem: (id: string) => () => void;
}
