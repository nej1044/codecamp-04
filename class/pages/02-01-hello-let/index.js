
export default function Home() {
  // JavaScript
  function hello() {
    document.getElementById('qqq').innerText = "반갑습니다"
  }

  return ( 
    // JSX
    // Fragment
    <>
      <div id="qqq">안녕하세요</div>
      <button onClick={hello}>버튼클릭</button>
    </>
  )
}