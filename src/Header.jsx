import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function HomePage() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="header" key="header">
        <h1>Header, value</h1>
        <div>
          <p>in cart</p>
          <Link to="/cart">
            <button>{count}</button>
          </Link>
        </div>
      </div>
      <Outlet context={[count, setCount]} />
    </>
  );
}
