import { toast } from "react-toastify";
import appAxios from "../utils/AppAxios";

function MovieForm() {
  function handelSubmit(e) {
    e.preventDefault();
    let newMovie = {
      title: e.target.title.value,
      description: e.target.description.value,
      posterURL: e.target.posterURL.value,
      trailer: e.target.trailer.value,
      rating: e.target.rating.value,
    };
    toast.promise(appAxios.post("/movies", newMovie), {
      pending: "loading",
      error: "error",
    });
  }
  return (
    <div className="form-container">
      <h1>Add New Movie</h1>
      <form id="movie-form" onSubmit={handelSubmit}>
        <label>Title:</label>
        <input type="text" id="title" name="title" />

        <label>Description:</label>
        <textarea id="description" name="description" rows="4"></textarea>

        <label>Poster URL:</label>
        <input type="url" id="posterURL" name="posterURL" />

        <label>Rating (1-10):</label>
        <input type="number" id="rating" name="rating" min="1" max="10" />

        <label>Trailer Link:</label>
        <input type="url" id="trailer" name="trailer" />

        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default MovieForm;
