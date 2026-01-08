import { IMAGE_URL } from "../api";

function MovieCard({ movie, addFavorite, isFavorite }) {
  return (
    <div className="movie-card">
      <span
        className={`heart ${isFavorite ? "active" : ""}`}
        onClick={() => addFavorite(movie)}
      >
        ❤️
      </span>

      <img
        src={IMAGE_URL + movie.poster_path}
        alt={movie.title}
      />

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
