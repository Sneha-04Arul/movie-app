import { useEffect, useState } from "react";
import { fetchMovies, searchMovies } from "../api";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    const loadMovies = async () => {
      try {
        if (search.trim() !== "") {
          const res = await searchMovies(search, page);
          setMovies(res.data.results.slice(0, 16)); // show 16 movies
        } else {
          const res = await fetchMovies(page);
          setMovies(res.data.results.slice(0, 16)); // show 16 movies
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    loadMovies();
  }, [page, search]);

  const addFavorite = (movie) => {
    if (!favorites.some((m) => m.id === movie.id)) {
      const updatedFavorites = [...favorites, movie];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  return (
    <div className="container">
      {/* Search Bar */}
      <input
        className="search"
        type="text"
        placeholder="Search Movies..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />

      {/* Movie Grid */}
      <div className="movies">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            addFavorite={addFavorite}
            isFavorite={favorites.some((m) => m.id === movie.id)}
          />
        ))}
      </div>

      {/* Pagination */}
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default Home;
