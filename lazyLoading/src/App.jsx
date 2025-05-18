import { lazy, Suspense, useState } from "react";

const User = lazy(() => import("./user.jsx"));

const App = () => {
  const [load, setLoad] = useState(false);
  return (
    <>
      <h1>lazy loading </h1>
      <h4>check network tab for better understanding</h4>
      <button onClick={() => setLoad(!load)}>Load a component</button>
      <br />
      {load ? (
        <Suspense fallback={"Loading ..."}>
          <User />
        </Suspense>
      ) : null}

      {/* {load && (
        <Suspense fallback={<h5>Loading ...</h5>}>
          <User />
        </Suspense>
      )} */}
    </>
  );
};
export default App;
