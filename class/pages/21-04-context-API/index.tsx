import MyBoardWrite from "../../src/components/units/21-context-api/MyBoardWrite.Container";
import { createContext } from "react";

export const MyContext = createContext(null);
const ContextAPIPage = () => {
  const myValue = {
    isEdit: true,
  };
  return (
    <MyContext.Provider value={myValue}>
      <MyBoardWrite />
    </MyContext.Provider>
  );
};

export default ContextAPIPage;
