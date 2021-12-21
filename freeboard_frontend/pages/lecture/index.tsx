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
import { firebaseApp } from "../_app";
import ReactPlayer from "react-player";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const LectureHeader = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  background-color: #8eb695;
  border-top: 1px solid white;
`;

const HeaderTitle = styled.h2`
  font-size: 36px;
  color: white;
`;

const HeaderSubtitle = styled.p`
  font-size: 20px;
  color: white;
  margin-bottom: 50px;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  @media only screen and (max-width: 600px) {
    height: 50px;
  }
  @media only screen and (min-width: 600px) {
    height: 75px;
  }
  @media only screen and (min-width: 996px) {
    height: 80px;
  }
`;

const HeaderInput = styled.input`
  width: 70%;
  height: 100%;
  padding: 20px;
  border: 1px solid white;
  &:focus {
    border: none;
    outline: 1px solid #8eb695;
  }
  font-size: 24px;
`;

const HeaderBtn = styled.button`
  height: 100%;
  color: white;
  font-size: 18px;
  font-weight: 700;
  border: 1px solid white;
  border-radius: 0 5px 5px 0;
  background-color: #8eb695;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    width: 100px;
  }
  @media only screen and (min-width: 600px) {
    width: 125px;
  }
  @media only screen and (min-width: 996px) {
    width: 150px;
  }
`;

const LectureBody = styled.section`
  width: 100%;
  /* min-height: 100px; */
  @media only screen and (max-width: 600px) {
    padding: 25px 0px;
  }
  @media only screen and (min-width: 600px) {
    padding: 50px 70px;
  }
  @media only screen and (min-width: 996px) {
    padding: 50px 155px;
  }
`;

const ContentsHeader = styled.div`
  width: 100%;
  background-color: #8eb695;
  @media only screen and (max-width: 600px) {
    height: 40px;
    padding: 0 30px;
  }
  @media only screen and (min-width: 600px) {
    height: 40px;
    padding: 0 50px;
  }
  @media only screen and (min-width: 996px) {
    height: 60px;
    padding: 0 50px;
  }
`;

const Contents = styled.div`
  float: left;
  margin: 50px;
  border: 1px solid #8eb695;
  overflow: hidden;
  border-radius: 10px 10px 0px 0px;
  @media only screen and (max-width: 600px) {
    width: 270px;
    height: 250px;
  }
  @media only screen and (min-width: 600px) {
    width: 520px;
    height: 350px;
  }
  @media only screen and (min-width: 996px) {
    width: 640px;
    height: 400px;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;
  height: 100%;
`;

const ContentsBtn = styled.span`
  cursor: pointer;
  color: white;
`;

const LecturePage = () => {
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
    <Wrapper>
      <LectureHeader>
        <HeaderTitle>시작부터 실전까지</HeaderTitle>
        <HeaderSubtitle>
          좋은 강의를 다른 사람과 공유하고 함께 들어요.
        </HeaderSubtitle>
        <InputWrapper>
          <HeaderInput type="text" onChange={handleChangeUrl} value={url} />
          <HeaderBtn onClick={onClickUpload}>업로드</HeaderBtn>
        </InputWrapper>
      </LectureHeader>
      <LectureBody>
        {data.map((el: any, idx: any) => (
          <Contents key={dataId[idx]}>
            <ContentsHeader>
              <BtnWrapper>
                <ContentsBtn onClick={onClickUpdate} id={dataId[idx]}>
                  수정
                </ContentsBtn>
                <ContentsBtn onClick={onClickDelete} id={dataId[idx]}>
                  삭제
                </ContentsBtn>
              </BtnWrapper>
            </ContentsHeader>
            <ReactPlayer width="100%" height="100%" url={el.url}></ReactPlayer>
          </Contents>
        ))}
      </LectureBody>
    </Wrapper>
  );
};

export default LecturePage;
