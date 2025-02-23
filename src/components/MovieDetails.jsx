import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import appAxios from '../utils/AppAxios';
import ReactPlayer from 'react-player';

function MovieDetails() {
    const params = useParams();
  const [movie,setMovie]=useState({})
  useEffect(() => {
    toast.promise(appAxios.get("/movies/" + params.id).then(res=>setMovie(res.data)),{pending:"Loading!",error:"Something went wrong!"});

  }, [params.id]);


  return (
    <div className='movie-details'>
            <h2>{movie.title}</h2>
        <img src={movie.posterURL} alt="" />
        <div className='movie-details-info'>
            <p><span>description</span>  :  {movie.description}</p>
            <p><span>rating</span> : {movie.rating}/10</p>
            <ReactPlayer url={movie.trailer}/>
        </div>
    </div>
  )
}

export default MovieDetails