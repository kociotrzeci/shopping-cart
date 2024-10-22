import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
export default function Cart() {
  const [count, setCount] = useOutletContext();
  const increment = () => setCount((c) => c + 1);
  return (
    <div>
      <button onClick={increment}>{count}</button>
      <Link to="/shop">
        <button>GO TO SHOP</button>
      </Link>
    </div>
  );
}
