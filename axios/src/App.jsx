import { useEffect } from "react";
import { getData } from "./Api/PostApi";

export const App = () => {
  console.log(getData());

  const getApiData = async () => {
    const res = await getData();
    console.log(res);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <h1>hello</h1>
    </>
  );
};
