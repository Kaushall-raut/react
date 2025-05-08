/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { deleteData } from "../Api/PostApi";
import { ContextData } from "../context/ContextApi";

/* eslint-disable react/prop-types */
export const Card = ({ value }) => {
  const { apiData, setApiData } = useContext(ContextData);
  const { id, body, title } = value;

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
      <button className="btn btn-accent" onClick={() => handleDelete(id)}>
        Delete
      </button>
      {/* </div> */}
      {/* </div> */}
    </li>
  );
};
