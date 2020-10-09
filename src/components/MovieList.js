import React from "react";
import Movie from "./Movie.js";
import PropTypes from "prop-types";
import Spinner from "react-bootstrap/Spinner";


function MovieList(props) {
  const movies = props.movies;
  const isLoaded = props.isLoaded;
  const error = props.error;
  if (error) {
    return <React.Fragment>Error: {error.message}</React.Fragment>;
  } else if (!isLoaded) {
    return (
      <div>
        <Spinner animation="border" variant="warning" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  } else {
    return (
      <React.Fragment>
        {movies.map((movie) => (
          <Movie
            whenMovieClicked={props.onMovieSelection}
            title={movie.title}
            overview={movie.overview}
            poster_path={movie.poster_path}
            popularity={movie.popularity}
            date={movie.date}
            id={movie.id}
          />
        ))}
      </React.Fragment>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array,
  onMovieSelection: PropTypes.func
};

export default MovieList;
