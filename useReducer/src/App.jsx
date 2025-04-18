import { useReducer } from "react";

const Reducer = (state, action) => {
  //Reducer function takes 2 parameter state and action
  console.log(state,action);

  // if (action.type === "Increment") {
  //   return state + 1;
  // }
  // if (action.type === "Decrement") {
  //   return state - 1;
  // }
  return action.type==="Increment"?state+1:state-1;
};

export const App = () => {
  const [count, dispatch] = useReducer(Reducer, 0); //this reducer function can also defined outside the component
  // console.log(dispatch);

  return (
    <div>
      <h1>UseReducer Hook</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button> {/*it neccessary to write type in an object  */}
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
    </div>
  );
};

//dispatch action says that what type of action is needed to perform to the reducer function 
