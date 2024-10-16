import { Link } from "react-router-dom";
export default function Shop() {
  return (
    <div>
      <h1>Shop</h1>;
      <Link to="..cart" relative="path">
        Go to cart
      </Link>
    </div>
  );
}
