import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { onError } from "../../../commons/libraries/utils";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 220px;
  @media only screen and (max-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 600px) {
    display: block;
  }
  @media only screen and (min-width: 996px) {
    display: block;
  }
`;

const TodayTitle = styled.span`
  font-size: 26px;
  font-weight: 500;
`;

const ItemWrap = styled.div`
  border-top: 3px solid #8eb696;
  padding: 10px;
`;

const Item = styled.div`
  border: 1px solid #9f9f9f;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const ItemImg = styled.img`
  width: 100%;
  height: 120px;
  margin-bottom: 5px;
`;

const Seller = styled.span`
  color: #9f9f9f;
  margin-right: 5px;
`;

const ItemTitle = styled.span`
  font-weight: 500;
`;
const TodayItem = () => {
  const router = useRouter();
  const [todayItem, setTodayItem] = useState([]);

  useEffect(() => {
    setTodayItem(JSON.parse(localStorage.getItem("todayitems") || "[]"));
  }, []);

  const getDetail = (id: String) => () => {
    router.push(`market/${id}`);
  };

  return (
    <>
      <Wrapper>
        <TodayTitle>오늘 본 상품</TodayTitle>
        <ItemWrap>
          {todayItem.slice(-5, -1).map((el: any) => (
            <Item key={el._id} onClick={getDetail(el._id)}>
              <ItemImg
                onError={onError}
                src={`https://storage.googleapis.com/${el.images[0]}`}
              />
              <Seller>[ {el.seller.name} ]</Seller>
              <ItemTitle>{el.name}</ItemTitle>
            </Item>
          ))}
        </ItemWrap>
      </Wrapper>
    </>
  );
};

export default TodayItem;
