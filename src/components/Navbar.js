import { Link } from "react-router-dom";

function Navbar() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <nav className="navbar">
      <h2>Movie App</h2>
      <Link to="/favorites" className="watchlist">
        Watchlist({favorites.length})
      </Link>
    </nav>
  );
}

export default Navbar;
