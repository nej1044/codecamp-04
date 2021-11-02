import { useState } from 'react'

export default function CounterStatePage() {
    const [count, setCount] = useState(0)  
    
    function handleClick() {
        setCount(count + 1)  
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>카운트증가</button>
        </div>
    )
}