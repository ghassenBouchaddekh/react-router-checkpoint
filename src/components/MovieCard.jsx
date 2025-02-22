import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function MovieCard({movie}) {
  return (
    <Link to={"/movies/"+movie.id}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterURL} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.description}
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
  );
}

export default MovieCard;