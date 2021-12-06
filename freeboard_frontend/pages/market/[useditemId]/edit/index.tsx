import MarketWrite from "../../../../src/components/units/markets/write/marketWrite.container";
import { createContext } from "react";

export const EditContext = createContext({});

const MarketEditPage = () => {
  const editValue = { isEdit: true };
  return (
    <EditContext.Provider value={editValue}>
      <MarketWrite />;
    </EditContext.Provider>
  );
};

export default MarketEditPage;
