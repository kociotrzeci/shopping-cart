import HomePage from "./Homepage";
import Shop from "./Shop";
import Cart from "./Cart";
import Header from "./Header";
const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/",
    element: <Header />,
    children: [
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];
export default routes;
