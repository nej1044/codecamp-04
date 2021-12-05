import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery } from "../../../../commons/types/generated/types";
import MarketDetailUI from "./marketDetail.presenter";
import { FETCH_USEDITEM, DELETE_USEDITEM } from "./marketDetail.queries";

const MarketDetail = () => {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchUseditem">>(FETCH_USEDITEM, {
    variables: { useditemId: router.query.useditemId },
  });
  const [deleteUseditem] = useMutation(DELETE_USEDITEM);

  const handleEdit = () => {
    router.push(`/market/${router.query.useditemId}/edit`);
  };

  const handleDelete = async () => {
    try {
      await deleteUseditem({
        variables: { useditemId: router.query.useditemId },
      });
      alert("게시물을 삭제했습니다.");
      router.push(`/market`);
    } catch (error: any) {
      alert(`게시물 삭제에 실패했습니다 ${error.message}`);
    }
  };
  return (
    <MarketDetailUI
      data={data}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MarketDetail;
