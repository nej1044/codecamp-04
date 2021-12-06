const BrowserStoragePage = () => {
  const setCookie = () => {
    document.cookie = "aaa=철수";
  };

  const setLocalStorage = () => {
    localStorage.setItem("bbb", "영희");
  };

  const setSessionStorage = () => {
    sessionStorage.setItem("ccc", "철수");
  };

  const getCookie = () => {
    const zzz = document.cookie
      .split("; ")
      .filter((el) => el.startsWith("zzz="))[0]
      .split("=")[1];
    console.log(zzz);
  };

  const getLocalStorage = () => {
    const bbb = localStorage.getItem("bbb");
    console.log(bbb);
  };

  const getSessionStorage = () => {
    const ccc = sessionStorage.getItem("ccc");
    console.log(ccc);
  };

  return (
    <>
      <button onClick={setLocalStorage}>로컬스토리지에 저장하기</button>
      <button onClick={setSessionStorage}>세션스토리지에 저장하기</button>
      <button onClick={setCookie}>쿠키에 저장하기</button>
      ================================================================
      <button onClick={getCookie}>쿠키에서 꺼내오기</button>
      <button onClick={getSessionStorage}>세션스토리지에서 꺼내오기</button>
      <button onClick={getLocalStorage}>로컬스토리지에서 꺼내오기</button>
    </>
  );
};

export default BrowserStoragePage;
