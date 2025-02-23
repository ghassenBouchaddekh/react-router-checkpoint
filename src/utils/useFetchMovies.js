import { useEffect, useState } from "react";
import appAxios from "./AppAxios";
import { toast } from "react-toastify";

function useFetchMovies() {

    const [movies, setMovies] = useState([]);
  
    useEffect(function () {
      toast.promise(
        appAxios
        .get("/movies")
        .then((res) => {
          setMovies(res.data);
        })
      ,{pending:"loading",error:"error"})
    });
  
  return (
    {movies,setMovies}
  )
}

export default useFetchMovies