import { ChangeEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IMyPageUI {
  onLoadMore: () => void;
  fetchPoint?: Pick<IQuery, "fetchPointTransactions">;
  data?: Pick<IQuery, "fetchUserLoggedIn">;
  handleOpen: () => void;
  passwordOpen: () => void;
  isEdit?: boolean;
  openUpdateUser: () => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  updateName: () => void;
  open: boolean;
  handleClose: () => void;
  handleChangeCoin: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickPayment: () => void;
  passwordEdit: boolean;
  passwordClose: () => void;
  onChangePw: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeRePw: (event: ChangeEvent<HTMLInputElement>) => void;
  resetPassword: () => void;
  getDetail: (id: string) => () => void;
}

export interface IMyPageStyled {
  status?: boolean;
}
