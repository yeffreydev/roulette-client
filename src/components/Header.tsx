import react from "react";
import { Link } from "react-router-dom";
import "./../media/css/Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="logo">
          <h1>R 2-7000</h1>
        </div>
        <div className="navbar">
          <li>
            <Link to="/">to home</Link>
          </li>
          <li>
            <Link to="/app"> Open App </Link>
          </li>
          <li>
            <Link to="/login"> Login </Link>
          </li>
        </div>
      </div>
    </div>
  );
};
export default Header;
