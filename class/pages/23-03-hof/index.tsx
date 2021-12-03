const HofPage = () => {
  const onClickchild = (idx) => (event) => {
    console.log(event.target.id);
    console.log(idx);
  };

  return (
    <>
      <h1>Hof 연습 페이지입니다.</h1>
      <div>
        {["철수", "영희", "훈이"].map((el, idx) => (
          <div key={el} onClick={onClickchild(idx)}>
            {el}
          </div>
        ))}
      </div>
    </>
  );
};

export default HofPage;
