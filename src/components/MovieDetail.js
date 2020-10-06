import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Container from 'react-bootstrap/Container'

function MovieDetail(props) {
  const { movie } = props;
  document.body.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`;

  return (
    <div>
      <Card
        onClick={() => props.handleClick()}
        border="success"
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
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="movie path"
              />
            </div>
          </Col>
          <Col md={8}>
            <Card.Body className="card-body1">
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text className="card-b">
                {movie.overview}
                <p>{movie.popularity}</p>
                <p>{movie.date}</p>
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
