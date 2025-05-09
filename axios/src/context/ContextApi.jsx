import { createContext, useEffect, useState } from "react";
import { getData } from "../Api/PostApi";

// eslint-disable-next-line react-refresh/only-export-components
export const ContextData = createContext();

// eslint-disable-next-line react/prop-types
export const DataWrapper = ({ children }) => {
  const [updatedData, setUpdatedData] = useState({});

  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const res = await getData();
    // console.log("res", res);

    setApiData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ContextData.Provider
      value={{ apiData, setApiData, updatedData, setUpdatedData }}
    >
      {children}
    </ContextData.Provider>
  );
};
