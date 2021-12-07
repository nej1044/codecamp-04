import { useQuery } from "@apollo/client";
import { FETCH_BEST, FETCH_USEDITEM_BEST } from "./home.queries";
import HomeUI from "./home.presenter";
import { useRouter } from "next/router";
import { MouseEvent, SyntheticEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

const HomeComp = () => {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(FETCH_BEST);
  const { data: fetchUseditemBest } =
    useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(FETCH_USEDITEM_BEST);

  const getDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${event.currentTarget.id}`);
  };

  const getProject = (id: string) => () => {
    router.push(`/market/${id}`);
  };

  const onError = (event: SyntheticEvent<HTMLImageElement>) => {
    (event.target as any).src =
      "https://reviewpro.co.kr/wp-content/uploads/2020/06/vipul-jha-a4X1cdC1QAc-unsplash-scaled.jpg";
  };

  return (
    <HomeUI
      data={data}
      getDetail={getDetail}
      fetchUseditemBest={fetchUseditemBest}
      onError={onError}
      getProject={getProject}
    />
  );
};

export default HomeComp;
