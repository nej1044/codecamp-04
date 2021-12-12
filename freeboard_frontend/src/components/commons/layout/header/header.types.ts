import { ChangeEvent } from "react";

export interface IHeaderUIProps {
  moveHome: () => void;
  openLogin: () => void;
  isOpen: boolean;
  handleChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: () => void;
  moveSignup: () => void;
  data?: any;
  logout: () => void;
  moveCart: () => void;
  shoppingCart: string[];
  accessToken: string;
}
