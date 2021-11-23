import { useEffect, useState } from "react";

const UseEffectDependencyArrayPage = () => {
  // console.log("안녕");
  const [count, setCount] = useState(0);

  // ///// 최초 1회 시행 /////
  useEffect(() => {
    console.log("1회 실행");
  }, []);

  const onClickCounter = () => {
    setCount((prev) => prev + 1);
  };
  // ///// 의존성배열의 count 감지 후 실행 /////
  // useEffect(() => {
  //   console.log("count가 변경되면 실행");
  // }, [count]);

  // ///// 최초렌더링+1 /////
  // useEffect(() => {
  //   console.log("1회 실행");
  //   setCount(100);
  // }, []);

  // ///// 무한루프 /////
  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, [count]); // 사용하지마세요!!!!

  return (
    <>
      <div>현재카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기</button>
    </>
  );
};

export default UseEffectDependencyArrayPage;
