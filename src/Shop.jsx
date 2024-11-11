import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import ShowItemsShop from "./ShowItemsShop";
import { askApi } from "./askApi";
export default function Shop() {
  const [cart, modifyCart] = useOutletContext();
  console.log(cart);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (!existingItem) {
      modifyCart(cart.concat([{ ...item, count: 1 }]));
      console.log("New item added");
      console.log(cart);
    } else {
      existingItem.count++;
      console.log("Item count updated");
      console.log(cart);
    }
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
