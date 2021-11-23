import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  console.log("마운트시작");

  useEffect(() => {
    console.log("컴포넌트가 마운트됐습니다.");
    inputRef.current?.focus();

    return () => {
      console.log("컴포넌트가 제거됩니다.");
    };
  }, []);

  useEffect(() => {
    console.log("컴포넌트가 변경되었습니다.");
  }, [count]);

  const onClickCounter = () => {
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    router.push("/");
  };

  return (
    <>
      <input type="password" ref={inputRef} />
      <div>카운트: {count}</div>
      <button onClick={onClickCounter}>카운트(+1)</button>
      <button onClick={onClickMove}>이동하기</button>
    </>
  );
};

export default MyComponent;
