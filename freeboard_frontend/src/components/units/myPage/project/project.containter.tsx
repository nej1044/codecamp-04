import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { SyntheticEvent, useState } from "react";
import MyPageProjectUI from "./project.presenter";
import { FETCH_BOUGHT, FETCH_SOLD } from "./project.queries";

const MyPageProject = () => {
  const router = useRouter();
  const { data: fetchBought, fetchMore: moreBought } = useQuery(FETCH_BOUGHT);
  const { data: fetchSold, fetchMore: moreSold } = useQuery(FETCH_SOLD);
  const [isBought, setIsBought] = useState(false);

  const getDetail = (id: String) => () => {
    router.push(`market/${id}`);
  };

  const onError = (event: SyntheticEvent<HTMLImageElement>) => {
    (event.target as any).src =
      "https://reviewpro.co.kr/wp-content/uploads/2020/06/vipul-jha-a4X1cdC1QAc-unsplash-scaled.jpg";
  };

  const onLoadMore = () => {
    if (isBought) {
      if (!fetchBought) return;

      moreBought({
        variables: {
          page: Math.ceil(fetchBought?.fetchUseditemsIBought.length / 10) + 1,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult?.fetchUseditemsIBought)
            return { fetchUseditemsIBought: [...prev.fetchUseditemsIBought] };
          return {
            fetchUseditemsIBought: [
              ...prev.fetchUseditemsIBought,
              ...fetchMoreResult.fetchUseditemsIBought,
            ],
          };
        },
      });
    } else {
      if (!fetchSold) return;

      moreSold({
        variables: {
          page: Math.ceil(fetchSold?.fetchUseditemsISold.length / 10) + 1,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult?.fetchUseditemsISold)
            return { fetchUseditemsISold: [...prev.fetchUseditemsISold] };
          return {
            fetchUseditemsISold: [
              ...prev.fetchUseditemsISold,
              ...fetchMoreResult.fetchUseditemsISold,
            ],
          };
        },
      });
    }
  };

  const getBought = () => {
    setIsBought(true);
  };

  const getSold = () => {
    setIsBought(false);
  };

  return (
    <MyPageProjectUI
      fetchBought={fetchBought}
      fetchSold={fetchSold}
      isBought={isBought}
      getDetail={getDetail}
      onError={onError}
      onLoadMore={onLoadMore}
      getBought={getBought}
      getSold={getSold}
    />
  );
};

export default MyPageProject;
