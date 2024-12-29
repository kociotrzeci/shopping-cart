import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div>
      <h1>SHOP NAME HERE</h1>
      <p>This website uses public API to get images.</p>
      <p>It uses React router, to merge proper files. State is held in header, so it does not survive reloading</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <Link to="/shop">Go to shop</Link>
    </div>
  );
}
