import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";
import { firebaseApp } from "../_app";
export default function FirebasePage() {
  const onClickSubmit = async () => {
    const product = collection(getFirestore(firebaseApp), "product");
    await addDoc(product, {
      seller: "영희",
      name: "모니터",
      contents: "lg모니터",
    });
  };

  const onClickFetch = async () => {
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);
    const docs = result.docs.map((el) => el.data());
    console.log(docs);
  };
  return (
    <>
      <div>파이어베이스 연습 페이지</div>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>불러오기</button>
    </>
  );
}
