import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore/lite";
import { firebaseApp } from "../../../../pages/_app";
import { useState, useEffect, MouseEvent, ChangeEvent } from "react";
import LectureUI from "./lecture.presenter";

const Lecture = () => {
  const [url, setUrl] = useState("");
  const [data, setData] = useState<any>([]);
  const [dataId, setDataId] = useState<string[]>([]);

  const handleChangeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const onClickUpload = async () => {
    const password = prompt("비밀번호를 입력해주세요");
    const lecture = collection(getFirestore(firebaseApp), "lecture");
    await addDoc(lecture, {
      url,
      password,
    });
    setUrl("");
    fetchLectures();
  };

  const fetchLectures = async () => {
    const lecture = collection(getFirestore(firebaseApp), "lecture");
    const result = await getDocs(lecture);
    const lectures = result.docs.map((el) => el.data());
    const lectureId = result.docs.map((el) => el.id);
    setData(lectures);
    setDataId(lectureId);
  };

  useEffect(() => {
    fetchLectures();
  }, []);

  const onClickDelete = async (event: MouseEvent<HTMLSpanElement>) => {
    const docRef = doc(
      getFirestore(firebaseApp),
      "lecture",
      (event.target as HTMLSpanElement).id
    );
    await deleteDoc(docRef);
    fetchLectures();
  };

  const onClickUpdate = async (event: MouseEvent<HTMLSpanElement>) => {
    const edit = prompt("수정할 내용을 입력하세요.");
    const docRef = doc(
      getFirestore(firebaseApp),
      "lecture",
      (event.target as HTMLSpanElement).id
    );
    await updateDoc(docRef, { url: edit });
    fetchLectures();
  };

  console.log(data);
  return (
    <LectureUI
      handleChangeUrl={handleChangeUrl}
      onClickUpload={onClickUpload}
      data={data}
      dataId={dataId}
      onClickUpdate={onClickUpdate}
      onClickDelete={onClickDelete}
      url={url}
    />
  );
};

export default Lecture;
