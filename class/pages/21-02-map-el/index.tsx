const MapElPage = () => {
  // 기본방법(화살표함수)
  // ["철수", "영희", "훈이"].forEach((el, index) => {
  //   console.log("el", el);
  //   console.log("index", index);
  // });

  // 기본방법(기본함수)
  // ["철수", "영희", "훈이"].forEach(function (el, index) {
  //   console.log("el", el);
  //   console.log("index", index);
  // });

  // 매개변수 바꿔보기
  // ["철수", "영희", "훈이"].forEach((asdf, qwer) => {
  //   console.log("asdf", asdf);
  //   console.log("qwer", qwer);
  // });

  // el과 index 바꾸기
  ["철수", "영희", "훈이"].forEach((index, el) => {
    console.log("index", index);
    console.log("el", el);
  });
  return <></>;
};

export default MapElPage;
