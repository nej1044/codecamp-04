const Child2 = (props) => {
  return (
    <>
      <div>자식2카운트: {props.count}</div>
      <button onClick={props.counter}>카운트올리기</button>
    </>
  );
};

export default Child2;
