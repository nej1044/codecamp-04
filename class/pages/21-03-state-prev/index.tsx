import { useState } from "react";

const StatePrev = () => {
  const [count, setCount] = useState(0);

  const counter = () => {
    setCount((prev) => prev + 1); // setCount(Callback Func)
    setCount(function (prev) {
      // 로직 추가하기...
      return prev + 1;
    });
  };
  // setCount((asdf) => asdf + 1);
  //   };
  return (
    <>
      <div>현재 카운트: {count}</div>
      <button onClick={counter}>카운트 증가</button>
    </>
  );
};

export default StatePrev;
