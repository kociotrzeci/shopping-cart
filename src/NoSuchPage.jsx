import { Link } from "react-router-dom";
export default function NoSuchPage() {
  return (
    <p>
      No such page, return to
      <Link to="/homepage">
        <button>HOMEPAGE</button>
      </Link>
    </p>
  );
}
