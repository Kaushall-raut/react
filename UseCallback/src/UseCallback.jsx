import { memo } from "react";
import { useCallback } from "react";
import { useState } from "react";

const Button = memo(({ action, children }) => {
  console.log("Button Component");

  return (
    <>
      <button onClick={action}>{children}</button>
    </>
  );
});
export const CallbackHook = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    console.log("increment");

    setCount((prev) => prev + 1);
  }, []);
  const decrement = useCallback(() => {
    console.log("decrement");
    
    setCount((prev) => prev - 1);
  }, []);
  return (
    <>
      <h2> {count} </h2>
      <Button action={increment}>Increment</Button>
      <Button action={decrement}>decrement</Button>
    </>
  );
};
