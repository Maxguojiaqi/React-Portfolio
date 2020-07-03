import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
        <ul className="navbar-nav">
          <li className="h3 nav-item">
            <Link to="/" className="nav-link">
              About
            </Link>
          </li>
          <li className="h3 nav-item">
            <Link to="/discover" className="nav-link">
              Projects
            </Link>
          </li>
        </ul>
    </nav>
    </div>
  );
}

export default Navbar;
