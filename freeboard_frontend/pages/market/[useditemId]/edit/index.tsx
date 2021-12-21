import MarketWrite from "../../../../src/components/units/markets/write/marketWrite.container";
import { createContext } from "react";
import { withAuth } from "../../../../src/components/commons/hocs/withAuth";

export const EditContext = createContext<any>({});

const MarketEditPage = () => {
  const editValue = { isEdit: true };
  return (
    <EditContext.Provider value={editValue}>
      <MarketWrite />;
    </EditContext.Provider>
  );
};

export default withAuth(MarketEditPage);
