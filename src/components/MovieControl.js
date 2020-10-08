import React from "react";
import "../styles.css";
import Search from "./Search.js";
import MovieList from "./MovieList.js";
import MovieDetail from "./MovieDetail.js";
// import { connect } from 'react-redux';
// import PropTypes from "prop-types";
import { withFirestore, isLoaded } from 'react-redux-firebase';
import Favorites from "./Favorites"

class MovieControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      movies: [],
      call: "seattle",
      selectedMovie: null,
      MovieCard: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.makeApiCall = this.makeApiCall.bind(this);
  }

  handleClick = () => {
    if (this.state.selectedMovie != null) {
      this.setState({
        MovieCard: false,
        selectedMovie: null,
      });
    } else {
      this.setState((prevState) => ({
        MovieCard: !prevState.MovieCard,
      }));
    }
  };

  handleChangingSelectedMovie = (id) => {
    const selectedMovie = this.state.movies.filter(
      (movie) => movie.id === id
    )[0];
    this.setState({ selectedMovie: selectedMovie });
  };

  makeApiCall = () => {
    let call = this.state.call;
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${call}&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((jsonifiedResponse) => {
        this.setState({
          isLoaded: true,
          movies: jsonifiedResponse.results,
        });
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      });
  };

  componentDidUpdate() {
    this.makeApiCall();
  }

  handleSubmit(event) {
    this.setState({ call: event.target.name.value });
    event.preventDefault();
  }

  render() {
    const auth = this.props.firebase.auth();
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <React.Fragment>
          <h1>You must be signed in to access the movie app.</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      let currentlyVisibleState = null;
      if (this.state.selectedMovie != null) {
        currentlyVisibleState = (
          <div>
            <MovieDetail
              movie={this.state.selectedMovie}
              handleClick={this.handleClick}
            />
            <Favorites movie={this.state.selectedMovie}
              search={this.state.call} />
          </div>
        );
      } else {
        currentlyVisibleState = (
          <div>
            <Search
              formSubmissionHandler={this.handleSubmit}
            />
            <MovieList
              movies={this.state.movies}
              onMovieSelection={this.handleChangingSelectedMovie}
              isLoaded={this.state.isLoaded}
              error={this.state.error}
            />
          </div>
        );
      }
      return <React.Fragment>{currentlyVisibleState}</React.Fragment>;
    }
  }
}

export default withFirestore(MovieControl);
