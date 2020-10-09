import React from "react";
import "../styles.css";
import Search from "./Search.js";
import MovieList from "./MovieList.js";
import MovieDetail from "./MovieDetail.js";
// import { connect } from 'react-redux';
// import PropTypes from "prop-types";
import { withFirestore, isLoaded } from 'react-redux-firebase';

// import Home from "./Home"



class MovieControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      movies: [],
      call: "predator",
      selectedMovie: null,
      MovieCard: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.makeApiCall = this.makeApiCall.bind(this);
    this.makeHomeApiCall = this.makeApiCall.bind(this);
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

  makeApiCall = (call) => {
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


  makeApiHomeCall = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
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

  componentDidMount(){
    this.makeApiHomeCall();
  }

    componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevState.call !== this.state.call) { 
      this.makeApiCall(this.state.call);
    }
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
      console.log(this.state.selectedMovie)
      let currentlyVisibleState = null;
      if (this.state.selectedMovie != null) {
        currentlyVisibleState = (
          <div>
            
            <MovieDetail
           
              movie={this.state.selectedMovie}
              handleClick={this.handleClick}
            />
           
          </div>
        );
      } else {
        currentlyVisibleState = (
          <div>
            <Search
              formSubmissionHandler={this.handleSubmit}
            />
            <MovieList
             onMovieSelection={this.handleChangingSelectedMovie}
              movies={this.state.movies}
              isLoaded={this.state.isLoaded}
              error={this.state.error}
            />
          </div>
        );
      }
      return <React.Fragment>
        {currentlyVisibleState}</React.Fragment>;
    }
  }
}

export default withFirestore(MovieControl);
