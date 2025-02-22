import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="d-flex p-4 justify-content-around bg-primary">
      <h2>Logo</h2>
      <Link to={"/"}>
        <h2 className="text-black">Movies</h2>
      </Link>
      <Link to={"/add"}>
        <h2 className="text-black">Add Movie</h2>
      </Link>
    </nav>
  );
}

export default NavBar;
