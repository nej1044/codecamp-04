import { useRouter } from "next/router";

type IPage = "/boards" | "/markets" | "/mapage";

const useMoveToPage = () => {
  const router = useRouter();
  const [visiedPage, setVisitedPage] = useState("/");

  const moveToPage = (page: IPage) => () => {
    setVisitedPage(page);
    router.push(page);
  };

  return { moveToPage };
};

export default useMoveToPage;
