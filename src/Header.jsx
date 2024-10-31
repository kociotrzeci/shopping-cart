import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function HomePage() {
  const [cart, modifyCart] = useState([]);
  const [cleanCart, modifyCleanCart] = useState([]);
  return (
    <>
      <div className="header" key="header">
        <h1>Header</h1>
        <div>
          <p>in cart {cart.length} items</p>
          <Link to="/cart"></Link>
        </div>
      </div>
      <Outlet context={[cart, modifyCart, cleanCart, modifyCleanCart]} />
    </>
  );
}
