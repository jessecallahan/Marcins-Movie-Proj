import React from "react";
import PropTypes from "prop-types";

function MovieDetail(props) {
  const { movie } = props;
  return (
    <div>
      {movie.title}
      <img className="photo" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie path" />
          <p>{movie.popularity}</p>
          <p>{movie.date}</p>
          <button onClick={props.handleClick}>Go back to movie list</button>
    </div>
  )
}

MovieDetail.propTypes = {
  movie: PropTypes.object,
  handleClick: PropTypes.func
}

export default MovieDetail

