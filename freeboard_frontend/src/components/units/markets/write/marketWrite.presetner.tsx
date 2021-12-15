import PhotoUpload from "../../../commons/photoUpload/photoUpload01/photoUpload01.container";
import * as S from "./marketWrite.styles";
import { v4 as uuid4 } from "uuid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { schema, nonSchema } from "./marketWrite.validation";
import { EditContext } from "../../../../../pages/market/[useditemId]/edit";
import { useContext } from "react";
import { IMarketWriteUI } from "./marketWrite.types";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const marketWriteUI = (props: IMarketWriteUI) => {
  const { isEdit } = useContext(EditContext);
  const { handleSubmit, register, setValue, trigger, getValues, formState } =
    useForm({
      mode: "onChange",
      resolver: yupResolver(isEdit ? nonSchema : schema),
    });

  const handleChange = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  return (
    <>
      <S.Wrapper
        onSubmit={
          isEdit
            ? handleSubmit(props.handleEditMarket)
            : handleSubmit(props.onClickCreate)
        }
      >
        <S.WriteWrapper>
          {!isEdit && <S.H1>프로젝트 등록하기</S.H1>}
          {isEdit && <S.H1>프로젝트 수정하기</S.H1>}
          <S.PhotoSection>
            <S.Title>이미지</S.Title>
            {/* <DragDropUpload /> */}
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
              <S.InputWrap>
                <S.BodyInput
                  type="text"
                  {...register("name")}
                  defaultValue={props.data?.fetchUseditem.name}
                  placeholder="제목을 입력하세요"
                />
                <div>{formState.errors.name?.message}</div>
              </S.InputWrap>
            </S.BodyItem>
            <S.BodyItem>
              <S.Title>프로젝트 진행 방식</S.Title>
              <S.InputWrap>
                <S.BodyInput
                  type="text"
                  {...register("remarks")}
                  defaultValue={props.data?.fetchUseditem.remarks}
                />
                <div>{formState.errors.remarks?.message}</div>
              </S.InputWrap>
            </S.BodyItem>
            <S.BodyItem>
              <S.Title>관련 태그</S.Title>
              <S.HashWrap>
                <S.HashArr>
                  {props.hashArr.map((el: any, idx: number) => (
                    <S.InnerHash key={idx} onClick={props.deleteHash(idx)}>
                      {el}
                    </S.InnerHash>
                  ))}
                </S.HashArr>
                <S.HashInput
                  type="text"
                  placeholder="태그를 입력하세요"
                  onKeyUp={props.onKeyUp}
                />
              </S.HashWrap>
              <div>{formState.errors.tags?.message}</div>
            </S.BodyItem>
            <S.BodyTextItem>
              <S.Title>상세 프로젝트 내용</S.Title>
              <S.InputWrap>
                <ReactQuill
                  onChange={handleChange}
                  style={{ height: "20em" }}
                  value={
                    getValues("contents") ||
                    props.data?.fetchUseditem.contents ||
                    ""
                  }
                />
                <div>{formState.errors.contents?.message}</div>
              </S.InputWrap>
            </S.BodyTextItem>
            <S.BodyItem>
              <S.Title>월 급여</S.Title>
              <S.InputWrap>
                <S.BodyInput
                  type="text"
                  {...register("price")}
                  defaultValue={props.data?.fetchUseditem.price}
                />
                <div>{formState.errors.price?.message}</div>
              </S.InputWrap>
            </S.BodyItem>
            <S.BodyItem>
              <S.Title>근무지 주소</S.Title>
              <S.InputWrap>
                <S.Zipcode
                  type="text"
                  placeholder="07250"
                  disabled
                  value={
                    props.zipcode ||
                    props.data?.fetchUseditem.useditemAddress?.zipcode ||
                    ""
                  }
                />
                <S.ZipcodeSearch
                  type="button"
                  onClick={props.onToggleModal}
                  value="우편번호 검색"
                />
                {props.isOpenAddress && (
                  <Modal
                    visible={true}
                    onOk={props.onToggleModal}
                    onCancel={props.onToggleModal}
                  >
                    <DaumPostcode onComplete={props.handleComplete} />
                  </Modal>
                )}
                <S.BodyInput
                  type="text"
                  disabled
                  value={
                    props.address ||
                    props.data?.fetchUseditem.useditemAddress?.address ||
                    ""
                  }
                />
                <S.BodyInput
                  type="text"
                  onChange={props.changedDetailAddress}
                  defaultValue={
                    props.data?.fethUseditem?.useditemAddress?.addressDetail
                  }
                />
              </S.InputWrap>
            </S.BodyItem>
          </section>
        </S.WriteWrapper>
        <S.Footer>
          {!isEdit && <S.FooterBtn>등록하기</S.FooterBtn>}
          {isEdit && <S.FooterBtn>수정하기</S.FooterBtn>}
        </S.Footer>
      </S.Wrapper>
    </>
  );
};

export default marketWriteUI;
