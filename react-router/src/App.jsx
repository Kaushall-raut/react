import { createBrowserRouter } from "react-router";

import { RouterProvider } from "react-router-dom";

import { AppLayout } from "./Components/Layout/AppLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact, FormData } from "./pages/Contact";
import { ErrorPage } from "./pages/ErrorPage";

import { RandomData } from "./api/RandomData";
import { DynamicRouting } from "./pages/DynamicRouting";
import Data from "./pages/Data";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />, //so whenever user type wrong url then only this component will get rendered

      children: [
        { index: true, element: <Home /> },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
          action: FormData, //it will execute the function which is created to catch or handle form data
        },
        {
          path: "data",
          element: <Data />,
          loader: RandomData,
        },
        {
          path: "data/:id",
          element: <DynamicRouting />,
          // loader: RandomData,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
