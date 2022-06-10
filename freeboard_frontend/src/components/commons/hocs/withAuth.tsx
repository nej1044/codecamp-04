import { useRouter } from "next/router";
import { ComponentType, useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";

export const withAuth =
  <P extends {}>(Component: ComponentType<P>) =>
  (props: P) => {
    const router = useRouter();
    const { setIsOpen } = useContext(GlobalContext);
    
    useEffect(() => {
      if (!localStorage.getItem("isLoggedIn")) {
        alert("로그인이 필요합니다.");
        router.push("/");
        setIsOpen(true);
      }
    }, []);

    return <Component {...props} />;
  };
