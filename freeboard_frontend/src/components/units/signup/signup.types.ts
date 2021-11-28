import { ChangeEvent } from "react";

export interface IPropsSignupUI {
  handleChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSignup: () => void;
  btnColor: boolean;
}

export interface IPropsSignupStyled {
  btnColor: boolean;
}
