import MyFormUI from "./MyForm.presenter";
import { FormValues } from "./MyForm.types";

export default function MyForm() {
  function onClickLogin(data: FormValues) {
    // loginUser API 요청하기
    console.log(data);
  }

  return <MyFormUI onClickLogin={onClickLogin} />;
}
