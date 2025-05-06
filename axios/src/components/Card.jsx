/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export const Card = ({ value }) => {
  const { id, title } = value;

  return (
    <div className="card bg-slate-800 text-neutral-content w-96 h-[12rem]">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{id}</h2>
        <p>{title}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Accept</button>
          <button className="btn btn-accent">Deny</button>
        </div>
      </div>
    </div>
  );
};
