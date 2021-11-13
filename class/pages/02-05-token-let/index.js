export default function New() {
  function handleClick() {
    document.getElementById("token").innerText = String(
      Math.floor(Math.random() * 1000000)
    ).padStart(6, "0");
  }

  return (
    <div>
      <h1 id="token">000000</h1>
      <button onClick={handleClick}>인증번호전송</button>
    </div>
  );
}
