import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const FucntionalLifeCycleRefPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("마운트");
    inputRef.current?.focus();

    return () => {
      console.log("빠이");
    };
  }, []);

  useEffect(() => {
    console.log("수정");
  });

  const onClickCounter = () => {
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    router.push("/");
  };
  return (
    <>
      <input ref={inputRef} type="text" />
      <div>현재카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기</button>
      <button onClick={onClickMove}>페이지 이동</button>
    </>
  );
};

export default FucntionalLifeCycleRefPage;
