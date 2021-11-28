import { ChangeEvent } from "react";

export interface IHeaderUIProps {
  moveHome: () => void;
  openLogin: () => void;
  isOpen: boolean;
  handleChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: () => void;
  moveSignup: () => void;
}
