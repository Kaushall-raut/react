import { NavLink, useNavigate, useRouteError } from "react-router";

export const ErrorPage = () => {
  const error = useRouteError(); //provide some data in the form of object through which you can return some jsx  it is an another way of showing error page
  console.log(error);

  const navigate = useNavigate(); ///returns a function
  const handleNavigate = () => {
    navigate(-1); //this will take the user to its previous visited page
  };

  return (
    <>
      <h1>Page Not found go back to Home Page</h1>
      <NavLink to={"/"}>HomePage</NavLink>
      <button onClick={handleNavigate}>GO back to previous page</button>{" "}
      {/** useNavigate hook can also use to navigate the user from one page to another page */}
    </>
  );
};
