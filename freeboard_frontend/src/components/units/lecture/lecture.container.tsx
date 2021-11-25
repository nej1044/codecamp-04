import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore/lite";
import { useState, useEffect, MouseEvent, ChangeEvent } from "react";
import { firebaseApp } from "../../../../pages/_app";
import * as S from "./lecture.styles";
import ReactPlayer from "react-player";

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

  return (
    <S.Wrapper>
      <S.LectureHeader>
        <S.HeaderTitle>시작부터 실전까지</S.HeaderTitle>
        <S.HeaderSubtitle>
          좋은 강의를 다른 사람과 공유하고 함께 들어요.
        </S.HeaderSubtitle>
        <S.InputWrapper>
          <S.HeaderInput type="text" onChange={handleChangeUrl} value={url} />
          <S.HeaderBtn onClick={onClickUpload}>업로드</S.HeaderBtn>
        </S.InputWrapper>
      </S.LectureHeader>
      <S.LectureBody>
        {data.map((el: any, idx: any) => (
          <S.Contents key={dataId[idx]}>
            <S.ContentsHeader>
              <S.BtnWrapper>
                <S.ContentsBtn onClick={onClickUpdate} id={dataId[idx]}>
                  수정
                </S.ContentsBtn>
                <S.ContentsBtn onClick={onClickDelete} id={dataId[idx]}>
                  삭제
                </S.ContentsBtn>
              </S.BtnWrapper>
            </S.ContentsHeader>
            <ReactPlayer
              width="650px"
              height="400px"
              url={el.url}
            ></ReactPlayer>
          </S.Contents>
        ))}
      </S.LectureBody>
    </S.Wrapper>
  );
};

export default Lecture;
