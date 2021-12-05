import { useRouter } from "next/router";

const useMoveToPage = () => {
  const router = useRouter();

  const moveToPage = (page) => () => {
    router.push(page);
  };

  return { moveToPage };
};

export default useMoveToPage;
