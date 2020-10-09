import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import placeholderImage from '../Assets/placeholder.png'



function Movie(props) {

  let movieImage;
  if(props.poster_path== null){
    movieImage = placeholderImage;
  } else {movieImage = `https://image.tmdb.org/t/p/w500/${props.poster_path}` }

  return (
    <React.Fragment>
      <Card
        onClick={() => props.whenMovieClicked(props.id)}
        style={{
          width: "100%",
          overflow: "hidden",
          borderRadius: "15px",
          marginTop: "15px",
          marginBottom: "15px",
          color: "black"
        }}
      >
        <Row>
          <Col>
            <img
              className="photo"
              src={movieImage}
              alt="movie path"
            />
          </Col>
          <Col>
            <Card.Body>
            <Card.Title>{props.title}</Card.Title>
              <Card.Text>
                <p>{props.overview}</p>
                <p></p>
                <p>Vote Average: {props.vote_average} /10</p>
                <p>Release Date: {props.release_date}</p>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </React.Fragment>
  );
}

Movie.propTypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
  poster_path: PropTypes.string,
  vote_average: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.string,
  release_date: PropTypes.string,
  whenMovieClicked: PropTypes.func

};

export default Movie;
