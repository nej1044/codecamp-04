import { useCallback, useMemo, useState } from "react";
import MemoizationUI from "./memoization.presenter";

const Memoization = () => {
  console.log("컨테이너가 렌더링됩니다.");
  const [count, setCount] = useState(0);
  let letCount = 0;

  const randomValue = useMemo(() => {
    return Math.random();

    // 함수도 기억 가능 실무에서 사용하진 않으나 원리 이해하기
    // return () => {
    //   setCount((prev) => prev + 1);
    // };
  }, []);
  console.log(randomValue);

  const counter = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const letCounter = useCallback(() => {
    letCount += 1;
  }, []);
  return (
    <>
      <div>====================</div>
      <div>이것은 컨테이너</div>
      <div>카운트(let): {letCount}</div>
      <button onClick={letCounter}>let버튼</button>
      <div>카운트(state): {count} </div>
      <button onClick={counter}>state버튼</button>
      <div>====================</div>
      <MemoizationUI count={count} />
    </>
  );
};

export default Memoization;
