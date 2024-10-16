import HomePage from "./Homepage";
import Shop from "./Shop";
import Cart from "./Cart";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
  const [state, updateState] = useState();
  const routes = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/shop",
      element: <Shop state={state} stateUpdate={updateState} />,
    },
    {
      path: "/cart",
      element: <Cart state={state} stateUpdate={updateState} />,
    },
  ];
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}
