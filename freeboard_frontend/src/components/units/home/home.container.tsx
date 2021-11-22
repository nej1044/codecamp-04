import { useQuery } from "@apollo/client";
import { FETCH_BEST } from "./home.queries";
import HomeUI from "./home.presenter";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

const HomeComp = () => {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(FETCH_BEST);

  const getDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${event.currentTarget.id}`);
  };

  return <HomeUI data={data} getDetail={getDetail} />;
};

export default HomeComp;
