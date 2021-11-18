import { useState } from "react";

const StatePrevPage = () => {
  const [count, setCount] = useState(0);

  const onClickCounter = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <div>현재 count:{count}</div>
      <button onClick={onClickCounter}>카운트 올리기</button>
    </div>
  );
};

export default StatePrevPage;
