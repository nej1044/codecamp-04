import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { MouseEvent, ChangeEvent, useState, useEffect } from "react";
import BoardNewUI from "./BoardNew.presenter";
import { CREATE_BOARD, UPDATE_BOARD, FETCH_BOARD } from "./BoardNew.queries";
import {
  IBoardNewProps,
  IMyBoardAddress,
  IMyVariables,
  IUpdateBoardInput,
} from "./BoardNew.types";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";

const BoardNew = (props: IBoardNewProps) => {
  const router = useRouter();
  const [createBoard] =
    useMutation<Pick<IMutation, "createBoard">>(CREATE_BOARD);
  const [updateBoard] =
    useMutation<Pick<IMutation, "updateBoard">>(UPDATE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">>(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  const [tempTitle, setTempTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [errorWriter, setErrorWriter] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [errorContents, setErrorContents] = useState("");
  const [topic, setTopic] = useState("");
  const [btnColor, setBtnColor] = useState(false);
  const [snsUrl, setSNSUrl] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [imgUrl, setImgUrl] = useState<string[]>([]);

  function hanldeClickTopic(event: MouseEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;
    setTopic(target.value);
  }

  // 등록하기
  // 작성자
  function handleChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
    if (event.target.value) {
      setErrorWriter("");
    }
    if (event.target.value && password && tempTitle && contents) {
      setBtnColor(true);
    } else {
      setBtnColor(false);
    }
  }

  // 비밀번호
  function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    if (event.target.value) {
      setErrorPassword("");
    }
    if (writer && event.target.value && tempTitle && contents) {
      setBtnColor(true);
    } else {
      setBtnColor(false);
    }
  }

  // 제목
  function handleChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTempTitle(event.target.value);
    if (event.target.value) {
      setErrorTitle("");
    }
    if (writer && password && event.target.value && contents) {
      setBtnColor(true);
    } else {
      setBtnColor(false);
    }
  }

  // 내용
  function handleChangeContents(event: ChangeEvent<HTMLTextAreaElement>) {
    setContents(event.target.value);
    if (event.target.value) {
      setErrorContents("");
    }
    if (writer && password && tempTitle && event.target.value) {
      setBtnColor(true);
    } else {
      setBtnColor(false);
    }
  }

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    setIsOpen((prev) => !prev);
    setAddress(data.address);
    setZipcode(data.zonecode);
  };

  const handleChangeDetailAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  // SNS주소
  function handleChangeURL(event: ChangeEvent<HTMLInputElement>) {
    setSNSUrl(event.target.value);
  }

  // 이미지 업로드
  const onChangeFiles = (idx: number, url: string) => {
    const images = [...imgUrl];

    if (images[idx]) {
      images[idx] = url;
    } else {
      images.push(url);
    }

    setImgUrl([...images]);
  };

  const handleClickBoard = async () => {
    // 작성자 검증
    if (!writer) {
      setErrorWriter("이름을 정확히 입력해 주세요.");
    }
    // 비밀번호 검증
    if (!password) {
      setErrorPassword("비밀번호를 정확히 입력해 주세요.");
    }
    // 제목 검증
    if (!tempTitle) {
      setErrorTitle("제목을 입력해 주세요.");
    }
    // 내용 검증
    if (!contents) {
      setErrorContents("내용을 입력해 주세요.");
    }
    // 모두 작성되었다면 작성정보전달
    if (writer && password && tempTitle && contents) {
      const title = `[${topic}] ` + tempTitle;
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              youtubeUrl: snsUrl,
              boardAddress: { zipcode, address, addressDetail },
              images: imgUrl,
            },
          },
        });
        alert("게시물 등록이 완료되었습니다.");
        console.log(result);
        router.push(`/boards/${result.data?.createBoard._id}`);
      } catch (error) {
        if (error instanceof Error)
          alert(`게시물 등록에 실패했습니다. ${error.message}`);
      }
    }
  };

  // 수정하기
  const myBoardAddress: IMyBoardAddress = {};

  const myUpdateBoardInput: IUpdateBoardInput = {
    boardAddress: myBoardAddress,
  };

  const myVariables: IMyVariables = {
    updateBoardInput: myUpdateBoardInput,
    password,
    boardId: String(router.query.boardId),
  };

  if (tempTitle) {
    myVariables.updateBoardInput.title = `[${topic}] ` + tempTitle;
  } else {
    myVariables.updateBoardInput.title =
      `[${topic}] ` +
      data?.fetchBoard.title.split(" ").splice(1, Infinity).join(" ");
  }

  if (contents) {
    myVariables.updateBoardInput.contents = contents;
  } else {
    myVariables.updateBoardInput.contents = data?.fetchBoard.contents;
  }

  if (zipcode) {
    myUpdateBoardInput.boardAddress.zipcode = zipcode;
  } else {
    myUpdateBoardInput.boardAddress.zipcode =
      data?.fetchBoard?.boardAddress?.zipcode;
  }

  if (address) {
    myUpdateBoardInput.boardAddress.address = address;
  } else {
    myUpdateBoardInput.boardAddress.address =
      data?.fetchBoard?.boardAddress?.address;
  }

  if (addressDetail) {
    myUpdateBoardInput.boardAddress.addressDetail = addressDetail;
  } else {
    myUpdateBoardInput.boardAddress.addressDetail =
      data?.fetchBoard?.boardAddress?.addressDetail;
  }

  useEffect(() => {
    const imgContainer = data?.fetchBoard.images;
    imgContainer && setImgUrl([...imgContainer]);
  }, [data]);

  if (imgUrl) {
    myVariables.updateBoardInput.images = imgUrl;
  }

  async function handleEditBoard() {
    // 비밀번호 검증
    if (!password) {
      setErrorPassword("비밀번호를 정확히 입력해 주세요.");
    }
    try {
      const result = await updateBoard({ variables: myVariables });
      router.push(`/boards/${router.query.boardId}`);
      alert("게시물 수정이 완료되었습니다.");
      console.log(result);
    } catch (error: any) {
      alert(`게시물 수정에 실패했습니다. ${error.message}`);
    }
  }

  const onClickDeletes = (idx: number) => {
    const images = [...imgUrl];
    images.splice(idx, 1);
    setImgUrl(images);
  };

  return (
    <BoardNewUI
      data={data}
      isEdit={props.isEdit}
      selectedTopic={hanldeClickTopic}
      changedWriter={handleChangeWriter}
      changedPassword={handleChangePassword}
      changedTitle={handleChangeTitle}
      changedContents={handleChangeContents}
      errorWriter={errorWriter}
      errorPassword={errorPassword}
      errorTitle={errorTitle}
      errorContents={errorContents}
      sendBoard={handleClickBoard}
      editBoard={handleEditBoard}
      btnColor={btnColor}
      changedUrl={handleChangeURL}
      onToggleModal={onToggleModal}
      isOpen={isOpen}
      handleComplete={handleComplete}
      zipcode={zipcode}
      address={address}
      changedDetailAddress={handleChangeDetailAddress}
      topic={topic}
      onChangeFiles={onChangeFiles}
      imgUrl={imgUrl}
      onClickDeletes={onClickDeletes}
    />
  );
};

export default BoardNew;
