import { Card } from "./Card";
import data from "../api/data.json";
import { useEffect, useState } from "react";

export const Accordion = () => {
  const [jsonData, setData] = useState([]);
  useEffect(() => {
    setData(data);
  }, []);

  const [active, setActive] = useState(false);

  const handleButton = (id) => {
    setActive((prev) => (prev === id ? false : id));
  };

  return (
    <div className="  flex justify-center flex-col items-center ">
      <h1 className="mt-4 text-4xl text-[#4C3BCF] mb-8  font-bold">
        Accordion in React
      </h1>
      <ul className="w-full">
        {jsonData.map((currentValue) => {
          return (
            <Card
              key={currentValue.id}
              value={currentValue}
              active={active === currentValue.id}
              handleButton={() => {
                handleButton(currentValue.id);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
};
