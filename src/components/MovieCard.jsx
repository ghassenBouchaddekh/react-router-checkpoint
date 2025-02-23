
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link to={"/movies/" + movie.id}>
      <div className="movie-card">
        <img src={movie.posterURL} alt="" />
        <div className="movie-card-info">

        <h3>{movie.title}</h3>
        <h4>{movie.rating}</h4>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
