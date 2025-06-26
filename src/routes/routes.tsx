import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <>Home</>,
  },
  {
    path: "/about",
    element: <>About</>,
  },
  {
    path: "/contact",
    element: <>Contact</>,
  },
]);