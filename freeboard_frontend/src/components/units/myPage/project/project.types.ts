import { IQuery } from "../../../../commons/types/generated/types";

export interface IMyPageProjectUI {
  getSold: () => void;
  getBought: () => void;
  isBought: boolean;
  fetchSold: Pick<IQuery, "fetchUseditemsISold">;
  getDetail: (id: string) => () => void;
  fetchBought: Pick<IQuery, "fetchUseditemsIBought">;
  onLoadMore: () => void;
}

export interface IProjectStyled {
  isBought?: boolean;
  isSoldout?: boolean;
}
