import { MyInput, MyButton } from "./BoardWrite.styles"

const BoardWriteUI = (props) => {
  return(
    <>
      작성자: <MyInput type="text" onChange={props.onChangeMyWriter} /><br />
      제목: <MyInput type="text" onChange={props.onChangeMyTitle} /><br />
      내용: <MyInput type="text" onChange={props.onChangeMyContents} /><br />
      <MyButton onClick={props.zzz} qqq={props.qqq}>게시물 등록</MyButton>
    </>
  )
}
export default BoardWriteUI