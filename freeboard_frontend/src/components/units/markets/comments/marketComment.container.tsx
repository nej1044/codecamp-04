import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import MarketCommentUI from "./MarketComment.presenter";
import {
  FETCH_USER,
  CREATE_USEDITEM_QUESTION,
  FETCH_QUESTIONS,
} from "./MarketComment.queries";

const MarketComment = () => {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER);
  const { data: fetchQuestions, refetch } = useQuery(FETCH_QUESTIONS, {
    variables: { useditemId: String(router.query.useditemId) },
  });
  const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);
  const [contents, setContents] = useState("");

  console.log(fetchQuestions);
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
      refetch({ useditemId: String(router.query.useditemId) });
      setContents("");
      console.log(result);
      alert("질문을 등록했습니다.");
    }
  };

  return (
    <MarketCommentUI
      data={data}
      handleChangeInput={handleChangeInput}
      createQuestion={createQuestion}
      fetchQuestions={fetchQuestions}
      contents={contents}
    />
  );
};

export default MarketComment;
