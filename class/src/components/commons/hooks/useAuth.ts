import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isLoading, setIsLoding] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인이 필요합니다.");
      router.push("/");
    } else {
      setIsLoding(false);
    }
  }, []);
  return {
    isLoading,
  };
};
