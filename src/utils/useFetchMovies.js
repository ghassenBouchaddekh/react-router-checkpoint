import { useEffect, useState } from "react";
import appAxios from "./AppAxios";

function useFetchMovies({id}) {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(function () {
      setLoading(true);
      appAxios
        .get("/movies/"+(id?id:""))
        .then((res) => {
          setMovies(res.data);
        })
        .catch((e) => setError(e))
        .finally(() => setLoading(false));
    }, [id]);
  
  return (
    {loading,movies,setMovies,error}
  )
}

export default useFetchMovies