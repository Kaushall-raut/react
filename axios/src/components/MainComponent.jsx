import { useContext } from "react";
import { ContextData } from "../context/ContextApi";
import { Input } from "./InputComponent";
import { Card } from "./Card";

export const MainComponent = () => {
  const apiData = useContext(ContextData);
  console.log("data", apiData);
  return (
    <>
      <main className="bg-slate-700  flex justify-baseline items-center flex-col  pt-3 pb-12">
        <Input />
        <ul className="grid grid-cols-3 gap-3 ">
          {apiData.map((value) => {
            console.log("log", value);

            return (
              <li key={apiData.id}>
                <Card value={value} />
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};
