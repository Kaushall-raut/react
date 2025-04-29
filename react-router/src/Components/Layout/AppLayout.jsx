import { Outlet, useNavigation } from "react-router";
// import "./AppLayout.css";
import { Header } from "./Header";
import { Loader } from "../Loader";
export const AppLayout = () => {
  let loader = useNavigation();
  console.log(loader);

  if (loader.state == "loading") {
    return <Loader />;
  }
  return (
    <>
      <Header />
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};
