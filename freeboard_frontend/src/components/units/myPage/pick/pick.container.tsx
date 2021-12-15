import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { SyntheticEvent } from "react";
import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../../commons/types/generated/types";
import PickUI from "./pick.presenter";
import { FETCH_PICK } from "./pick.queries";

const Pick = () => {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_PICK, { variables: { search: "" } });

  const getDetail = (id: string) => () => {
    router.push(`market/${id}`);
  };

  const onError = (event: SyntheticEvent<HTMLImageElement>) => {
    (event.target as any).src =
      "https://reviewpro.co.kr/wp-content/uploads/2020/06/vipul-jha-a4X1cdC1QAc-unsplash-scaled.jpg";
  };

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemsIPicked.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemsIPicked)
          return { fetchUseditemsIPicked: [...prev.fetchUseditemsIPicked] };
        return {
          fetchUseditemsIPicked: [
            ...prev.fetchUseditemsIPicked,
            ...fetchMoreResult.fetchUseditemsIPicked,
          ],
        };
      },
    });
  };

  return (
    <PickUI
      data={data}
      getDetail={getDetail}
      onError={onError}
      onLoadMore={onLoadMore}
    />
  );
};

export default Pick;
