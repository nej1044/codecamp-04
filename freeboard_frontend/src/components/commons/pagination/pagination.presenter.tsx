import * as S from "./pagination.styles";
import { IPaginationUI } from "./pagination.types";

const PaginationUI = (props: IPaginationUI) => {
  return (
    <>
      <S.PrevArrow onClick={props.onClickPrevPage} />
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <S.Pages
              key={props.startPage + index}
              onClick={props.onClickPage}
              id={String(props.startPage + index)}
              current={props.startPage + index === props.current}
            >
              {props.startPage + index}
            </S.Pages>
          )
      )}
      <S.NextArrow onClick={props.onClickNextPage} />
    </>
  );
};
export default PaginationUI;
