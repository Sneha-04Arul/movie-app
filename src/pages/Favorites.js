import MovieCard from "../components/MovieCard";

function Favorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div className="container">
      <h2>Favorite Movies</h2>
      <div className="movies">
        {favorites.length === 0 && <p>No favorites added.</p>}
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} isFavorite />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
