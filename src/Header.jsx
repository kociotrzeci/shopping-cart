import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function HomePage() {
  const [cart, modifyCart] = useState([]);
  const itemsInCart = () => {
    return cart.reduce((itemsCount, cartItem) => {
      return itemsCount + (cartItem.count || 0);
    }, 0);
  };
  return (
    <>
      <div className="header" key="header">
        <h1>Header</h1>
        <div>
          <p>in cart {itemsInCart()} items</p>
          <Link to="/cart"></Link>
        </div>
      </div>
      <Outlet context={[cart, modifyCart]} />
    </>
  );
}
