import { Outlet } from "react-router";
// import "./AppLayout.css";
import { Header } from "./Header";
export const AppLayout = () => {
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
