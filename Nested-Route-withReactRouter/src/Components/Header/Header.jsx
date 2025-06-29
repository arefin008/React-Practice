import { Link } from "react-router";
import "./Header.css";
const Header = () => {
  return (
    <div>
      {/* <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a> */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/Users">Users</Link>
      <Link to="/posts">Posts</Link>
    </div>
  );
};

export default Header;
