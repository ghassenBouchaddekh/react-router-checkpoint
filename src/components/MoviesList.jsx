import React, { useState } from "react";
import useFetchMovies from "../utils/useFetchMovies";
import MovieCard from "./MovieCard";
function MoviesList() {
  const [id, setId] = useState("");
  const [filtered,setFilter]=useState()

  const { movies } = useFetchMovies(id);

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default MoviesList;
