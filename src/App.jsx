import "./index.scss";
import routes from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}
