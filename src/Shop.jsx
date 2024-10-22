import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
export default function Shop() {
  const [count, setCount] = useOutletContext();
  const increment = () => setCount((c) => c + 1);
  return (
    <div>
      <button onClick={increment}>{count}</button>
      <Link to="/cart">
        <button>GO TO CART</button>
      </Link>
    </div>
  );
}
