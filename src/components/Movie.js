import React from "react";
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'


function Movie(props) {
  return (
    <React.Fragment>
      <Col>
        <Card bg='success' style={{
          width: "18rem",
          overflow: "hidden",
          borderRadius: "15px",
          marginTop: "15px",
          marginBottom: "15px",
        }}>
          <div onClick={() => props.whenMovieClicked(props.id)}>


            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>
        <p>{props.overview}</p>
          <img className="photo" src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} alt="movie path" />
          <p>{props.popularity}</p>
          <p>{props.date}</p>
              </Card.Text>
            </Card.Body>
       </div>
        </Card>
      </Col>

    </React.Fragment >
  );
}

Movie.propTypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
  poster_path: PropTypes.string,
  populartiy: PropTypes.string,
 date: PropTypes.string,
 id: PropTypes.string,
  whenMovieClicked: PropTypes.func
};

export default Movie;


