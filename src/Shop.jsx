import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import ShowItems from "./ShowItems";
import { askApi } from "./getItems";
export default function Shop() {
  const [cart, modifyCart] = useOutletContext();
  const increment = () => setCount((c) => c + 1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const addToCart = (item) => {
    modifyCart(cart.concat([item]));
    console.log("item added");
    console.log(cart);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => {
        setData(response);
        setLoading(false);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  });

  return (
    <div>
      <Link to="/cart">
        <button>GO TO CART</button>
      </Link>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ShowItems _data={data} _addToCart={addToCart} />
      )}
    </div>
  );
}
