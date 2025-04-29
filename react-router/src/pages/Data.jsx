import { NavLink, useLoaderData } from "react-router-dom";

function Data() {
  const getData = useLoaderData(); //it is a hook similar to useEffect .  It is used to fetch api data which is passed through loader param
  console.log("data",getData);
console.log(typeof getData);


  return (
    <div>
      <h1>Hi your lucky number is {getData}</h1>
      <NavLink to={`${getData}`}>
        <button>Click to check dynamic url</button>
      </NavLink>
    </div>
  );
}

export default Data;
