import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { RouterProvider } from "react-router-dom";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
