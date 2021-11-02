export default function CounterLetPage() {  
    function handleClick() {
        document.getElementById('num').innerText ++
    }

    return (
        <div>
            <h1 id="num">0</h1>
            <button onClick={handleClick}>카운트증가</button>
        </div>
    )
}