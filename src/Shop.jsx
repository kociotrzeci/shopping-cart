import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import ShowItemsShop from "./ShowItemsShop";
import { askApi } from "./askApi";
export default function Shop() {
  const [cart, modifyCart] = useOutletContext();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const addToCart = (item) => {
    modifyCart(cart.concat([item]));
    console.log("item added");
    console.log(cart);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await askApi();
        setData(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Link to="/cart">
        <button>GO TO CART</button>
      </Link>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <h3>ERROR</h3>
      ) : (
        <ShowItemsShop _data={data} _addToCart={addToCart} />
      )}
    </div>
  );
}
