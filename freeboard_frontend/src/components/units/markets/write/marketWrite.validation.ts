import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("프로젝트 이름을 등록해주세요"),
  remarks: yup.string().required("프로젝트 진행 방식을 입력해주세요"),
  contents: yup.string().required("상세 프로젝트 내용을 입력해주세요"),
  price: yup.number().required("급여를 입력해주세요"),
  tags: yup.string().required("태그를 입력해주세요"),
  // images: yup.array().required("이미지를 등록해주세요"),
});
