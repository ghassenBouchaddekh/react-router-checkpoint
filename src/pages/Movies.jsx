import MoviesList from "../components/MoviesList"

function movies() {
    
  return (
    <div className='movies-container'>
        <h1 className='page-title'>Movies</h1>
        <MoviesList/>
    </div>
  )
}

export default movies