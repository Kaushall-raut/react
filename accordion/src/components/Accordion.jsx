import { Card } from "./Card";
import data from "../api/data.json";

export const Accordion = () => {
  return (
    <div className="bg-[#08182b]  flex justify-center flex-col items-center ">
      <h1 className="mt-4 text-4xl text-[#4C3BCF] mb-8  font-bold">
        Accordion in Rect
      </h1>
      <ul className="w-full">
        {data.map((currentValue) => {
          return <Card key={currentValue}  value={currentValue}/>;
        })}
      </ul>
    </div>
  );
};
