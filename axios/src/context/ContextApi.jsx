import { createContext, useEffect, useState } from "react";
import { getData } from "../Api/PostApi";

export const ContextData = createContext();

// eslint-disable-next-line react/prop-types
export const DataWrapper = ({ children }) => {
  const [apiData, setApiData] = useState({});

  const fetchData = async () => {
    const res = await getData();
    setApiData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ContextData.Provider value={apiData}>{children}</ContextData.Provider>
  );
};
