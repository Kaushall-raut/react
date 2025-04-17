import { createContext } from "react";
export const Data = createContext(); //CREATE CONTEXT RETURNS  A COMPONENT SO THE ITS FIRST LETTER SHOULD BE CAPITAL

export const ContextApi = ({children}) => {
  const name = "kaushal";
  const last="raut";

  return <Data.Provider value={{name,last}}>{children}</Data.Provider>;
};
