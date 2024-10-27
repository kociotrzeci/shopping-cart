import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import ShowItems from "./ShowItems";
import { askApi } from "./getItems";
export default function Shop() {
  const [count, setCount] = useOutletContext();
  const increment = () => setCount((c) => c + 1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  async () => {
    setData(await askApi());
  };
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
