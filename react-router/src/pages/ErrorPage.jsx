import { NavLink, useRouteError } from "react-router";

export const ErrorPage = () => {
  const error = useRouteError(); //provide some data in the form of object through which you can return some jsx  it is an another way of showing error page
  console.log(error);

  return (
    <>
      <h1>Page Not found go back to Home Page</h1>
      <NavLink to={"/"}>HomePage</NavLink>
    </>
  );
};
