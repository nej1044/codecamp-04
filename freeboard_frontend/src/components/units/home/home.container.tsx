import { useQuery } from "@apollo/client";
import { FETCH_BEST, FETCH_USEDITEM_BEST } from "./home.queries";
import HomeUI from "./home.presenter";
import { useRouter } from "next/router";
import { IQuery } from "../../../commons/types/generated/types";

const HomeComp = () => {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(FETCH_BEST);
  const { data: fetchUseditemBest } =
    useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(FETCH_USEDITEM_BEST);

  const getDetail = (id: string) => () => {
    router.push(`/boards/${id}`);
  };

  const getProject = (id: string) => () => {
    router.push(`/market/${id}`);
  };

  return (
    <HomeUI
      data={data}
      getDetail={getDetail}
      fetchUseditemBest={fetchUseditemBest}
      getProject={getProject}
    />
  );
};

export default HomeComp;
