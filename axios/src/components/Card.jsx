/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export const Card = ({ value }) => {
  const { id, body, title } = value;

  return (
    <div className="card bg-slate-800 text-neutral-content w-96 h-[18rem]">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{id}</h2>
        <p>
          <span>Title : </span>
          {title}
        </p>
        <p>
          <span className="font-bold">Body </span> : {body}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Edit</button>
          <button className="btn btn-accent">Delete</button>
        </div>
      </div>
    </div>
  );
};
