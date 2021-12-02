import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  const { setIsOpen } = useContext(GlobalContext);
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인이 필요합니다.");
      router.push("/");
      setIsOpen(true);
    }
  }, []);

  return <Component {...props} />;
};
