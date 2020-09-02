import React from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div>
      <nav className="navbar">
        <h1 className="display-4">8:ans Webbshop</h1>
        <ul>
          <Link className="navbar-toggler text-info" to="/">
            Home
          </Link>
          <Link className="navbar-toggler text-info" to="/cartpage">
            Cart
          </Link>
        </ul>
      </nav>
      {children}
    </div>
  );
}
