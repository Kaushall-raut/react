import { useContext } from "react";
import { ContextData } from "../context/ContextApi";
import { Input } from "./InputComponent";
import { deleteData } from "../Api/PostApi";
// import { Card } from "./Card";
import "./card.css";

export const MainComponent = () => {
  const { apiData, setApiData } = useContext(ContextData);
  // console.log("data", apiData);
  const handleDelete = async (id) => {
    try {
      console.log(id);

      const res = await deleteData(id);

      if (res.status === 200) {
        const updateDelete = apiData.filter((value) => {
          // console.log(value);

          return value.id !== id;
        });
        setApiData(updateDelete);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="bg-slate-700  flex justify-baseline items-center flex-col min-w-[100%] pt-3 pb-12 ">
        <Input />

        <ol className="grid grid-cols-1 gap-4 md:grid-cols-2  lg:grid-cols-3">
          {apiData.map((value) => {
            const { id, title, body } = value;
            return (
              // <li key={id}>
              // <Card key={id} value={value} />
              <li
                key={id}
                className="p-2 bg-slate-800 text-neutral-content w-96 h-[18rem] rounded-2xl"
              >
                {/* <div className="card-body items-center text-center"> */}
                {/* <h2 className="card-title">{id}</h2> */}
                <p className="m-2">
                  <span className="font-bold">Title : </span>
                  {title}
                </p>
                <p className="m-2">
                  <span className="font-bold">Body </span> : {body}
                </p>
                {/* <div className="card-actions justify-end"> */}
                <button className="btn btn-primary m-2">Edit</button>
                <button
                  className="btn btn-accent"
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </button>
                {/* </div> */}
                {/* </div> */}
              </li>
              // </li>
            );
          })}
        </ol>
      </section>
    </>
  );
};
