
const BoardListUI = (props) => {
  return (
    <>
    <input type="text" onChange={props.buttonabled}/>
    <button disabled={props.boolean} onClick={props.move1}>1번 게시글</button>
    <button disabled={props.boolean} onClick={props.move2}>2번 게시글</button>
    <button disabled={props.boolean} onClick={props.move3}>3번 게시글</button>
    </>
  )
}

export default BoardListUI