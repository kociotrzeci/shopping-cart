import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import ShowItemsCart from "./ShowItemsCart";
export default function Cart() {
  const [cart, modifyCart] = useOutletContext();
  const calculateTotalPrice = () => {
    return (
      Math.round(
        cart.reduce((total, item) => total + item.price * item.count, 0) * 100
      ) / 100
    );
  };

  return (
    <div className="cart">
      <div className="panel left shop-items">
        <ShowItemsCart _data={cart} _modifyCartContent={modifyCart} />
      </div>
      <div className="panel-right">
        <h2>TOTAL PRICE</h2>
        <h3>{calculateTotalPrice()}</h3>
        <button className="checkout">CHECKOUT =></button>
      </div>
    </div>
  );
}
