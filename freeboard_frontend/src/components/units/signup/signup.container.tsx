import SignUpUI from "./signup.presenter";
import { useState, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./signup.queries";
import { useRouter } from "next/router";

const Signup = () => {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [password, setPassword] = useState("");
  const [btnColor, setBtnColor] = useState(false);

  const moveHome = () => {
    router.push("/");
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
    if (inputs && event.target.value && inputs.password.length > 5) {
      setBtnColor(true);
    } else {
      setBtnColor(false);
    }
  };

  console.log(/\w+@\w+\.\w+/.test(inputs.email));
  const onClickSignup = async () => {
    if (!/\w+@\w+\.\w+/.test(inputs.email)) {
      alert("이메일을 다시 확인하세요");
    }
    if (inputs.password.length < 6) {
      alert("비밀번호를 6자리 이상 입력해주세요");
    }

    if (inputs.password !== password) {
      alert("비밀번호를 다시 확인하세요");
    }
    if (
      inputs &&
      inputs.password.length > 5 &&
      inputs.password === password &&
      /\w+@\w+.\w+/.test(inputs.email)
    ) {
      try {
        const result = await createUser({
          variables: {
            createUserInput: {
              ...inputs,
            },
          },
        });
        console.log(result);
        alert("회원가입이 완료되었습니다.");
        router.push("/");
      } catch (error: any) {
        alert(`회원가입에 실패했습니다 ${error.message}`);
      }
    }
  };
  return (
    <SignUpUI
      moveHome={moveHome}
      handleChangeInputs={handleChangeInputs}
      onClickSignup={onClickSignup}
      btnColor={btnColor}
      handleChangePassword={handleChangePassword}
    />
  );
};

export default Signup;
