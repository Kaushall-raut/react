import { useNavigate, useParams } from "react-router";

export const DynamicRouting = () => {
  const param = useParams(); //use to get value present in the website url
  console.log(param);

  const back = useNavigate();

  return (
    <>
      <h1>Kaushal {param.id}</h1>
      <br />
      <button
        onClick={() => {
          back(-1);
        }}
      >
        GoBack
      </button>
    </>
  );
};
