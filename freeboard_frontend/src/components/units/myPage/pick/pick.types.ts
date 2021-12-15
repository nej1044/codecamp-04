import { SyntheticEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IPickUI {
  data?: Pick<IQuery, "fetchUseditemsIPicked">;
  getDetail: (id: string) => () => void;
  onError: (event: SyntheticEvent<HTMLImageElement>) => void;
  onLoadMore: () => void;
}

export interface IPickStyled {
  isSoldout: boolean;
}
