import React, { useState } from "react";
import useFetchMovies from "../utils/useFetchMovies";
import MovieCard from "./MovieCard";
function MoviesList() {
  const [filtered,setFilter]=useState()

  const { movies } = useFetchMovies();

  return (
    <div className="movies-list">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default MoviesList;
