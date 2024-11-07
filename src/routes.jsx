import HomePage from "./Homepage";
import Shop from "./Shop";
import Cart from "./Cart";
import Header from "./Header";
import NoSuchPage from "./NoSuchPage";
import { Navigate } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <Header />,
    children: [
      { path: "", element: <Navigate to="/homepage" replace /> },
      { path: "homepage", element: <HomePage /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
      { path: "error", element: <NoSuchPage /> },
    ],
    errorElement: <Navigate to="/error" replace />,
  },
];
export default routes;
