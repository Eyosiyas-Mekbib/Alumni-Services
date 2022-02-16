import "../App.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        ALUMNI
      </Link>
      <nav className="">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/Admin">Admin</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
