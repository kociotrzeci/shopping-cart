import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import ShowItems from "./ShowItems";
export default function Shop() {
  const [count, setCount] = useOutletContext();
  const increment = () => setCount((c) => c + 1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchDataForPosts = async () => {
      try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/products?offset=1&limit=10`
        );
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let postsData = await response.json();
        setData(postsData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    console.log(data);
    fetchDataForPosts();
  }, []);

  return (
    <div>
      <button onClick={increment}>{count}</button>
      <Link to="/cart">
        <button>GO TO CART</button>
      </Link>
      <ShowItems
        _data={data}
        _addToCart={() => {
          return 0;
        }}
      />
    </div>
  );
}
