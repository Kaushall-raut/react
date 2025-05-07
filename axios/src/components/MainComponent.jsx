import { useContext } from "react";
import { ContextData } from "../context/ContextApi";
import { Input } from "./InputComponent";
import { Card } from "./Card";

export const MainComponent = () => {
  const apiData = useContext(ContextData);
  // console.log("data", apiData);
  return (
    <>
      <main className="bg-slate-700  flex justify-baseline items-center flex-col w-[100%] pt-3 pb-12">
        <Input />
        <ul className="grid  lg:grid-cols-3 gap-3 md:grid-cols-2   sm:grid-cols-1  ">
          {apiData.map((value) => {
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
