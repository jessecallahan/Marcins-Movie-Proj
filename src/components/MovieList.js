import React from 'react'
import Movie from './Movie.js'
import PropTypes from "prop-types";


// import CardDeck from 'react-bootstrap/CardDeck'
// import Card from 'react-bootstrap/Card'

function MovieList(props) {
  const movies = props.movies;
  const isLoaded = props.isLoaded;
  const error = props.error;
  console.log(movies)
  if (error) {
    return <React.Fragment>Error: {error.message}</React.Fragment>;
  } else if (!isLoaded) {
    return <React.Fragment>Loading...</React.Fragment>;
  } else {
    return (
      <React.Fragment>
          {props.movies.map((movie) =>
          <Movie 
            whenMovieClicked={props.onMovieSelection}
            title={movie.title}
            overview={movie.overview}
            poster_path={movie.poster_path}
            popularity={movie.popularity}
            date={movie.date} 
            id={movie.id}/>
            )}
            
          </React.Fragment>
          );
  }
        
}
      

MovieList.propTypes = {
  movies: PropTypes.array,
  onMovieSelection: PropTypes.func
};

export default MovieList;

