import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IMutation,
  IMutationUpdateUseditemQuestionArgs,
} from "../../../../../commons/types/generated/types";
import MarketCommentUI from "./marketComment.presenter";
import {
  FETCH_USER,
  CREATE_USEDITEM_QUESTION,
  FETCH_QUESTIONS,
  UPDATE_QUESTION,
} from "./marketComment.queries";

const MarketComment = (props) => {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER);
  const { data: fetchQuestions, refetch } = useQuery(FETCH_QUESTIONS, {
    variables: { useditemId: String(router.query.useditemId) },
  });
  const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_QUESTION);
  const [contents, setContents] = useState("");

  // 질문 작성
  const handleChangeInput = (event) => {
    setContents(event.target.value);
  };

  const createQuestion = async () => {
    if (contents) {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents,
          },
          useditemId: String(router.query.useditemId),
        },
      });
      refetch({ useditemId: String(router.query.useditemId) });
      setContents("");
      alert("질문을 등록했습니다.");
    }
  };

  const editContents = { contents };

  if (contents) {
    editContents.contents = contents;
  } else {
    editContents.contents = props.el?.contents;
  }

  const updateQuestion = async () => {
    try {
      if (!props.el?._id) return;

      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: editContents,
          useditemQuestionId: props.el?._id,
        },
      });
      alert("질문이 수정되었습니다.");
      refetch({ useditemId: String(router.query.useditemId) });
      props.setIsEdit?.(false);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <MarketCommentUI
      data={data}
      handleChangeInput={handleChangeInput}
      createQuestion={createQuestion}
      fetchQuestions={fetchQuestions}
      contents={contents}
      isEdit={props.isEdit}
      el={props.el}
      updateQuestion={updateQuestion}
    />
  );
};

export default MarketComment;
