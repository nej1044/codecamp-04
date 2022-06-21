import { Modal } from "antd";
import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, isOpenState } from "../../../commons/store";

export const withAuth =
  <P extends {}>(Component: ComponentType<P>) =>
  (props: P) => {
    const router = useRouter();
    const [accessToken] = useRecoilState(accessTokenState);
    const [, setIsOpen] = useRecoilState(isOpenState);

    useEffect(() => {
      if (!accessToken) {
        Modal.error({ content: "로그인이 필요합니다." });
        router.push("/");
        setIsOpen(true);
      }
    }, []);

    return <Component {...props} />;
  };
