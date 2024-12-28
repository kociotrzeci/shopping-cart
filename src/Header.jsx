import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
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
        <div className="header-content">
          <div className="flex-row first">
            <Link to="/homepage" className="flex-row">
              <h1>TEMPLATE SHOP</h1>
            </Link>
            <Link className="flex-row" to="/shop">
              <StoreIcon fontSize="large"></StoreIcon>
              <p>SHOP</p>
            </Link>
          </div>
          <div className="header-icons">
            <Link to="/cart">
              <Badge badgeContent={itemsInCart()} color="primary">
                <ShoppingCartIcon fontSize="large"></ShoppingCartIcon>
              </Badge>
            </Link>
          </div>
        </div>
      </div>
      <div className="content">
        <Outlet context={[cart, modifyCart]} />
      </div>
      <div className="footer">lorem ipsum</div>
    </>
  );
}
