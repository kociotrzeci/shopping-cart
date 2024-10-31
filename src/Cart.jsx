import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import ShowItemsCart from "./ShowItemsCart";
import { useEffect, useState } from "react";
export default function Cart() {
  const [cart, modifyCart] = useOutletContext();
  const [cleanCart, modifyCleanCart] = useState([]);

  useEffect(() => {
    const makeCleanCart = () => {
      const sortedCart = cart.toSorted((a, b) => {
        return a.id - b.id;
      });
      const cleanCartTemp = [];
      sortedCart.forEach((item) => {
        if (
          !cleanCartTemp.some((existingItem) => existingItem.id === item.id)
        ) {
          cleanCartTemp.push(item);
          cleanCartTemp[cleanCartTemp.length - 1].count = 1;
        } else cleanCartTemp[cleanCartTemp.length - 1].count++;
      });
      modifyCleanCart(cleanCartTemp);
    };
    makeCleanCart();
  }, [cart]);

  return (
    <div>
      <Link to="/shop">
        <button>GO TO SHOP</button>
      </Link>
      <ShowItemsCart _data={cleanCart} _addToCart={modifyCart} />
    </div>
  );
}
