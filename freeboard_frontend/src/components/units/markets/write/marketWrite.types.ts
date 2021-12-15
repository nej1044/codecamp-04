import { ChangeEvent } from "react";
import { Address } from "react-daum-postcode";

export interface FormValues {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  tags: any;
}

export interface IMarketWriteUI {
  handleEditMarket: (data: FormValues) => void;
  onClickCreate: (data: FormValues) => void;
  onChangeFiles: (idx: number, url: string) => void;
  imgUrl: string[];
  onClickDeletes: (idx: number) => void;
  data?: any;
  hashArr: string[] | [];
  deleteHash: (idx: number) => () => void;
  onKeyUp: (event: any) => void;
  isOpenAddress: boolean;
  zipcode: string;
  onToggleModal: () => void;
  handleComplete: (data: Address) => void;
  address: string;
  changedDetailAddress: (event: ChangeEvent<HTMLInputElement>) => void;
}
