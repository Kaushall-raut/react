import { useContext } from "react";
import { ContextData } from "../context/ContextApi";
import { Input } from "./InputComponent";

import { Card } from "./Card";
import "./card.css";

export const MainComponent = () => {
  const { apiData, setApiData } = useContext(ContextData);
  // console.log("data", apiData);

  return (
    <>
      <section className="bg-slate-700  flex justify-baseline items-center flex-col min-w-[100%] pt-3 pb-12 ">
        <Input setApiData={setApiData} apiData={apiData} />

        <ol className="grid grid-cols-1 gap-4 md:grid-cols-2  lg:grid-cols-3">
          {apiData.map((value) => {
            const { id } = value;
            return <Card key={id} value={value} />;
          })}
        </ol>
      </section>
    </>
  );
};
