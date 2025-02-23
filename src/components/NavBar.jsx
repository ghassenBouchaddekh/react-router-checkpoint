import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navBar">
      <h2>Logo</h2>
      <Link to={"/"}>
        <h2>Movies</h2>
      </Link>
      <Link to={"/add"}>
        <h2>Add Movie</h2>
      </Link>
    </nav>
  );
}

export default NavBar;
