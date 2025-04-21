import { useMemo } from "react";

export const Calculation = () => {
  const Calculate = () => {
    let number = 1;

    for (let i = 0; i < 1000000000; i++) {
      number++;
    }
    return number;
  };

  //sometimes some function takes time to perform a calculation that type of calculation are known as expensive calculation.

  //and when you render that type of function in a parent component then its get called everytime  whenever the parent component gets rendered which can affect your website performance so you use useMemo hook to memorize that function value

  //so this function only executed again when the value that is memorize gets changed

  const total = useMemo(() => {
    return Calculate();
  }, []);

  //now your component will not take time to update your count value

  //   const total = Calculate();
  return <h2>Total sum {total}</h2>;
};
