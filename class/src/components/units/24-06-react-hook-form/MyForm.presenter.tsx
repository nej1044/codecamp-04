// import Input01 from "../../commons/inputs/input01";
// import Button01 from "../../commons/buttons/01/button01";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
// import { schema } from "./MyForm.validation";

// const MyFormUI = (props) => {
//   const { handleSubmit, register, formState } = useForm({
//     mode: "onChange",
//     resolver: yupResolver(schema),
//   });
//   return (
//     <>
//       <form onSubmit={handleSubmit(props.onClickLogin)}>
//         이메일: <Input01 aaa="text" bbb={register("myEmail")} />
//         {/* 이메일: <nput01 type="text" {...register("myEmail")} /> */}
//         <div>{formState.errors.myEmail?.message}</div>
//         비밀번호: <Input01 aaa="password" bbb={register("myPassword")} />
//         {/* 비밀번호: <input type="password" {...register("myPassword")} /> */}
//         <div>{formState.errors.myPassword?.message}</div>
//         <Button01 type="submit" name="로그인하기" isValid={formState.isValid} />
//         {/* <MyButton isValid={props.formState.isValid}>로그인 하기</MyButton> */}
//         {/* <button type="button" onClick={onClickMove}>목록으로 이동하기</button> */}
//         {/* 버튼 타입의 초기값은 submit */}
//         {/* <button type="reset">초기화 하기</button> */}
//       </form>
//     </>
//   );
// };

// export default MyFormUI;
