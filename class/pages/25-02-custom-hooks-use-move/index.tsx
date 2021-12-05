import useMoveToPage from "../../src/components/commons/hooks/useMove";

const CoustomHooksUseMove = () => {
  const { moveToPage } = useMoveToPage();

  return (
    <>
      <div>페이지 이동 연습</div>
      <button onClick={moveToPage("/board")}>게시판 이동</button>
      <button onClick={moveToPage("/market")}>마켓 이동</button>
      <button onClick={moveToPage("/maypage")}>마이페이지 이동</button>
    </>
  );
};

export default CoustomHooksUseMove;
