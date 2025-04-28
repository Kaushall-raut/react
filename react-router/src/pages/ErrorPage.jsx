import { NavLink } from "react-router";

export const ErrorPage = () => {
  return (
    <>
      <h1>Page Not found go back to Home Page</h1>
      <NavLink to={"/"}>HomePage</NavLink>
    </>
  );
};
