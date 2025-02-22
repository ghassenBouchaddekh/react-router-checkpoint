import MoviesList from "../components/MoviesList"

function movies() {
    
  return (
    <div className='d-flex flex-column gap-4 p-3'>
        <h1 className='text-center'>Movies</h1>
        <MoviesList/>
    </div>
  )
}

export default movies