import { useState } from 'react'

export default function Home() {
  // JavaScript
  const [text, setText] = useState("안녕하세요")
  
  function hello() {
    setText("반갑습니다")
  }

  return ( 
    // JSX
    // Fragment
    <>
      <div >{text}</div>
      <button onClick={hello}>버튼클릭</button>
    </>
    
  )
}