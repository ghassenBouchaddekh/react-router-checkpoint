import React from "react";
import { useParams } from "react-router-dom";
import useFetchMovies from "../utils/useFetchMovies";

function movieDescription() {
  const params = useParams();
  const { movies } = useFetchMovies(params.id);
  if (!movies.length==0) {
    return (
      <div className="d-flex gap-3 w-90 mx-auto mt-2 justify-content-center">
        <img src={movies[0].posterURL} alt="" />
        
        <h2>{movies[0].title}</h2>

      </div>
      );
  }
  return <h2>loading</h2>;
}

export default movieDescription;
