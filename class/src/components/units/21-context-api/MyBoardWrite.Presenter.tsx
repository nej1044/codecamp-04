import { useContext } from "react";
import { MyContext } from "../../../../pages/21-04-context-API";

const MyBoardWriteUI = () => {
  const { isEdit } = useContext(MyContext);

  //   return <div>{props.isEdit ? "수정하기" : "등록하기"}</div>;
  return <div>{isEdit ? "수정하기" : "등록하기"}</div>;
};

export default MyBoardWriteUI;
