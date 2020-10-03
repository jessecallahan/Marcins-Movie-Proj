import React from 'react'

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
        <h1>Movie</h1>
        <ul>
          {movies.map((movie, index) =>
            <li key={index}>
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
              <img className="photo" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie path" />
              <p>{movie.popularity}</p>
              <p>{movie.date}</p>
            </li>
          )}
        </ul>
      </React.Fragment>
    );
  }
}

export default MovieList;