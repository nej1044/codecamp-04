import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import styled from "@emotion/styled";

interface IMyButtonProps {
  isValid: boolean;
}

const MyButton = styled.button`
  background-color: ${(props: IMyButtonProps) =>
    props.isValid ? "yellow" : "gray"};
`;
const schema = yup.object().shape({
  myEmail: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("반드시 입력해야하는 필수 사항입니다."),

  myPassword: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상입니다.")
    .max(15, "비밀번호는 최대 15자리까지입니다.")
    .required("비밀번호는 반드시 입력해 주세요."),
});

interface FormValues {
  myEmail: string;
  myPassword: string;
}

export default function ReactHookFormPage() {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function onClickLogin(data: FormValues) {
    // loginUser API 요청하기
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onClickLogin)}>
      이메일: <input type="text" {...register("myEmail")} />
      <div>{formState.errors.myEmail?.message}</div>
      비밀번호: <input type="password" {...register("myPassword")} />
      <div>{formState.errors.myPassword?.message}</div>
      <MyButton isValid={formState.isValid}>로그인 하기</MyButton>
    </form>
  );
}
