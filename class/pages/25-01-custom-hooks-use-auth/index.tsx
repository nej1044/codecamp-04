import { useAuth } from "../../src/components/commons/hooks/useAuth";

const CustomHooksUseAuthPage = () => {
  const { isLoading } = useAuth();

  if (isLoading) return <> </>;

  return <div>커스텀훅 권한분기 연습</div>;
};

export default CustomHooksUseAuthPage;
