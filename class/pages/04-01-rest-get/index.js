
import axios from 'axios'
import { useState } from 'react'

export default function RestGetPage() {
  const [title, setTitle] = useState('')
  let idx = 1

  async function zzz() {
    const result = await axios.get('https://koreanjson.com/posts/'+idx)
    setTitle(result.data.title)
    idx++
  }
  
  // arrow function 
  // const zzz = async() => {
  //   await axios.get('https://koreanjson.com/posts/'+idx)
  //   setTitle(result.data.title)
  //   idx++
  // }
  return (
    <>
      <div>{title}</div>
      <button onClick={zzz}>REST-API 요청하기</button>
    </>
  )

}