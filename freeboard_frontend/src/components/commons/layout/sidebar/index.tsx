import { ApolloQueryResult } from "@apollo/client";
import styled from "@emotion/styled";
import { isTargetLikeServerless } from "next/dist/server/config";
import { useState, MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

const SideBarWrapper = styled.div`
  position: absolute;
  top: 800px;
  left: 0;
  width: 300px;
  height: 700px;
  padding: 50px;
  text-align: right;
`;

const SideBarTitle = styled.div`
  margin: 30px 0;
  color: #9f9f9f;
`;

const CategoryWrapper = styled.ul`
  list-style: none;
`;

const Category = styled.li`
  margin: 10px 0;
  font-size: 20px;
  color: ${(props) => (props.active === true ? "#8eb695" : "black")};
  font-weight: ${(props) => (props.active === true ? "700" : "normal")};
  cursor: pointer;
`;

interface ISideBar {
  categorySelector: (event: MouseEvent<HTMLLIElement>) => void;
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}

const SideBar = (props: ISideBar) => {
  const [active, isActive] = useState("home");

  const categorySelector = (event: MouseEvent<HTMLLIElement>) => {
    const target = event.target as HTMLLIElement;
    isActive(target.id);
    if (target.id === "qna") {
      props.refetch({ search: "질문" });
    } else if (target.id === "freetalk") {
      props.refetch({ search: "자유주제" });
    } else if (target.id === "study") {
      props.refetch({ search: "스터디" });
    } else if (target.id === "home") {
      props.refetch({ search: "" });
    }
  };
  return (
    <>
      <SideBarWrapper>
        <SideBarTitle>디벨로펌과 함께 성장해보세요</SideBarTitle>
        <CategoryWrapper>
          <Category
            onClick={categorySelector}
            id="home"
            active={active === "home"}
          >
            홈
          </Category>
          <Category
            onClick={categorySelector}
            id="qna"
            active={active === "qna"}
          >
            질문
          </Category>
          <Category
            onClick={categorySelector}
            id="freetalk"
            active={active === "freetalk"}
          >
            자유주제
          </Category>
          <Category
            onClick={categorySelector}
            id="study"
            active={active === "study"}
          >
            스터디
          </Category>
        </CategoryWrapper>
      </SideBarWrapper>
    </>
  );
};
export default SideBar;
