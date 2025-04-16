import { useEffect, useState } from "react";
import './UseEffect.css';

export const UseEffectPractise = () => {
  const [count, setCount] = useState(0);

  const [text, setText] = useState("");

  useEffect(() => {
    document.title = `count : ${count}`;
    console.log(text);
    
  }, [count,text]);

  return (
    <section>
      <h1>count : {count} </h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Click </button>
      <h2>Type Here : {text}</h2>
      <input
        type="text"
        className="name"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
    </section>
  );
};
