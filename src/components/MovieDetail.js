import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import placeholderImage from './Assets/placeholder.png'
import Favorites from "./Favorites"
// import Container from 'react-bootstrap/Container'

function MovieDetail(props) {
  const { movie } = props;

  let movieImage;
  if(movie.poster_path== null){
    movieImage = placeholderImage;
  } else {movieImage = `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }
  


  return (
    <div 
    style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"

    }}>
      <Card
        onClick={() => props.handleClick()}
        style={{
          height: "40rem",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "5%",
          marginLeft: "5%",
          marginRight: "5%",
          background: "rgba(0, 0, 0, .3)",
        }}
      >
        <Row>
          <Col md={4}>
            <div className="movie-detail-image">
              <Card.Img
                variant="top"
                src={movieImage}
                alt="movie path"
              />
            </div>
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title className="MovieTitle">{movie.title}</Card.Title>
              <Card.Text className="card-body1">
                {movie.overview}
                <p></p>
                <p>Vote Average: {movie.vote_average}/10</p>
                <p>Release Date: {movie.release_date}</p>
                <Favorites movieprop={movie}/>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

MovieDetail.propTypes = {
  movie: PropTypes.object,
  handleClick: PropTypes.func,
};

export default MovieDetail;
