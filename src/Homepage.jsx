import { Link } from "react-router-dom";
import { getItems } from "./getItems";
export default function HomePage() {
  return (
    <div>
      <h1>dupa</h1>
      <Link to="/shop">Go to shop</Link>
    </div>
  );
}
