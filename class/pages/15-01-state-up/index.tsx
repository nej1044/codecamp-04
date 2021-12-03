import Child1 from "../../src/components/units/stateUp/Child1";
import Child2 from "../../src/components/units/stateUp/Child2";
import { useState } from "react";

const StateUpPage = () => {
  const [count, setCount] = useState(0);

  const counter = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <Child1 count={count} counter={counter} />
      <div>========================</div>
      <Child2 count={count} counter={counter} />
    </>
  );
};

export default StateUpPage;
