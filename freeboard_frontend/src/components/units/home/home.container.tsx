import { useQuery } from "@apollo/client";
import { FETCH_BEST } from "./home.queries";
import HomeUI from "./home.presenter";

const HomeComp = () => {
  const { data } = useQuery(FETCH_BEST);
  console.log(data);

  return <HomeUI data={data} />;
};

export default HomeComp;
