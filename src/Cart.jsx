import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import ShowItemsCart from "./ShowItemsCart";
export default function Cart() {
  const [cart, modifyCart] = useOutletContext();

  return (
    <div>
      <div className="panel left shop-items">
        <ShowItemsCart _data={cart} _modifyCartContent={modifyCart} />
      </div>
      <div className="panel right"> </div>
    </div>
  );
}
