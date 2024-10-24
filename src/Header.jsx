import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ShowItems from "./ShowItems";
export default function HomePage() {
  const [cart, modifyCart] = useState([]);
  function addToCart(_item) {
    return modifyCart(cart.concat[_item]);
  }

  return (
    <>
      <div className="header" key="header">
        <h1>Header, value</h1>
        <div>
          <p>in cart</p>
          <Link to="/cart"></Link>
        </div>
      </div>
      <Outlet context={[]} />
    </>
  );
}
