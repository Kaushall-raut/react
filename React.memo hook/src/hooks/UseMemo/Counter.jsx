import { useState } from "react";
import { Calculation } from "./Expensive";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Calculation />
      <h1>counter increment {count} times</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increment
      </button>
    </>
  );
};
