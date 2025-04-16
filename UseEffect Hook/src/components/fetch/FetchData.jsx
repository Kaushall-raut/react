import { useEffect, useState } from "react";

export const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);


// console.log(data);

//   console.log("data",data.results);
  
  return (
    <>
      <h1>Showing only 1 data</h1>
      {data.results?.slice(0, 1).map((element) => {
        console.log("data", element);

        return <div>
        <h1>Pokemon name : {element.name}</h1>
        {/* <img src={element.url} alt="image of pokemon" /> */}
        </div>
      })}
    </>
  );
};
