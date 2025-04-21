import { useState } from "react";
import { Child } from "./child";

export const Parent = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increment
      </button>
      <Child/>
    </>
  );
};
