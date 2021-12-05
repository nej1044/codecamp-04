import PhotoUpload from "../../../commons/photoUpload/photoUpload.container";
import * as S from "./marketWrite.styles";
import { v4 as uuid4 } from "uuid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { schema } from "./marketWrite.validation";

const marketWriteUI = (props) => {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  return (
    <S.Wrapper onSubmit={handleSubmit(props.onClickCreate)}>
      <S.WriteWrapper>
        {!props.isEdit && <S.H1>프로젝트 등록하기</S.H1>}
        {props.isEdit && <S.H1>프로젝트 수정하기</S.H1>}
        <S.PhotoSection>
          <S.Title>이미지</S.Title>
          <S.PhotoWrapper>
            {new Array(5).fill(1).map((_, index) => (
              <PhotoUpload
                key={uuid4()}
                index={index}
                onChangeFiles={props.onChangeFiles}
                imgUrl={props.imgUrl}
                // isEdit={props.isEdit}
                // data={props.data}
                onClickDeletes={props.onClickDeletes}
              />
            ))}
          </S.PhotoWrapper>
        </S.PhotoSection>
        <section>
          <S.BodyItem>
            <S.Title>프로젝트명</S.Title>
            <S.BodyInput
              type="text"
              {...register("name")}
              defaultValue={props.data?.fetchUseditem.name}
            />
            <div>{formState.errors.name?.message}</div>
          </S.BodyItem>
          <S.BodyItem>
            <S.Title>프로젝트 진행 방식</S.Title>
            <S.BodyInput
              type="text"
              {...register("remarks")}
              defaultValue={props.data?.fetchUseditem.remarks}
            />
            <div>{formState.errors.remarks?.message}</div>
          </S.BodyItem>
          <S.BodyItem>
            <S.Title>관련 태그</S.Title>
            <S.BodyInput
              type="text"
              {...register("tags")}
              defaultValue={props.data?.fetchUseditem.tags}
            />
            <div>{formState.errors.tags?.message}</div>
          </S.BodyItem>
          <S.BodyTextItem>
            <S.Title>상세 프로젝트 내용</S.Title>
            <S.BodyTextArea
              {...register("contents")}
              defaultValue={props.data?.fetchUseditem.contents}
            />
            <div>{formState.errors.contents?.message}</div>
          </S.BodyTextItem>
          <S.BodyItem>
            <S.Title>월 급여</S.Title>
            <S.BodyInput
              type="text"
              {...register("price")}
              defaultValue={props.data?.fetchUseditem.price}
            />
            <div>{formState.errors.price?.message}</div>
          </S.BodyItem>
          <S.BodyItem>
            <S.Title>근무지 주소</S.Title>
            <S.BodyInput type="text" />
          </S.BodyItem>
        </section>
      </S.WriteWrapper>
      <S.Footer>
        {!props.isEdit && <S.FooterBtn>등록하기</S.FooterBtn>}
        {props.isEdit && <S.FooterBtn>수정하기</S.FooterBtn>}
      </S.Footer>
    </S.Wrapper>
  );
};

export default marketWriteUI;
