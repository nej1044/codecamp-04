import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import MarketCommentUI from "./MarketComment.presenter";
import { FETCH_USER, CREATE_USEDITEM_QUESTION } from "./MarketComment.queries";

const MarketComment = () => {
  const { data } = useQuery(FETCH_USER);
  const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);
  const router = useRouter();
  const [contents, setContents] = useState("");

  // 질문 작성
  const handleChangeInput = (event) => {
    setContents(event.target.value);
  };

  const createQuestion = async () => {
    if (contents) {
      const result = await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents,
          },
          useditemId: String(router.query.useditemId),
        },
      });
      console.log(result);
      alert("질문을 등록했습니다.");
    }
  };

  return (
    <MarketCommentUI
      data={data}
      handleChangeInput={handleChangeInput}
      createQuestion={createQuestion}
    />
  );
};

export default MarketComment;
