import { useState } from 'react'

export default function New() {
    const [token, getToken] = useState("000000")  
    
    function handleClick() {
        getToken(String(Math.floor(Math.random() * 1000000)).padStart(6, '0'))
    }

    return (
        <div>
            <h1>{token}</h1>
            <button onClick={handleClick}>인증번호전송</button>
        </div>
    )
}