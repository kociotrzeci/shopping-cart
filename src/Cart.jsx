import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import ShowItemsCart from "./ShowItemsCart";
export default function Cart() {
  const [cart, modifyCart] = useOutletContext();
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.count, 0);
  };

  return (
    <div class="cart">
      <div className="panel left shop-items">
        <ShowItemsCart _data={cart} _modifyCartContent={modifyCart} />
      </div>
       <div className="panel-right">
        <h2>Total price</h2>
        <h3>{calculateTotalPrice()}</h3>
<button className="checkout">CHECKOUT =></button>
       </div>
    </div>
  );
}
