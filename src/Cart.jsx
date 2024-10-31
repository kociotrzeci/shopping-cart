import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import ShowItemsCart from "./ShowItemsCart";
export default function Cart() {
  const [cart, modifyCart] = useOutletContext();

  return (
    <div>
      <Link to="/shop">
        <button>GO TO SHOP</button>
      </Link>
      <ShowItemsCart _data={cart} _modifyCartContent={modifyCart} />
    </div>
  );
}
