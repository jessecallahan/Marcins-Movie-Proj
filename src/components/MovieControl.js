import React from "react";
import "../styles.css";
import Search from './Search.js'
import MovieList from './MovieList.js'
import MovieDetail from './MovieDetail.js'


class MovieControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      movies: [],
      call: 'seattle',
      selectedMovie: null,
      MovieCard: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.makeApiCall = this.makeApiCall.bind(this)
  }

  handleClick = () => {
    if (this.state.selectedMovie != null) {
      this.setState({
        MovieCard: false,
        selectedMovie: null
      });
    } else {
      this.setState(prevState => ({
        MovieCard: !prevState.MovieCard,
      }));
    }
  }


  handleChangingSelectedMovie = (id) => {
    const selectedMovie = this.state.movies.filter(movie => movie.id === id)[0];
    this.setState({ selectedMovie: selectedMovie });
  }


  makeApiCall = () => {
    console.log(process.env.REACT_APP_API_KEY)
    let call = this.state.call
    console.log(call)
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}c6&language=en-US&query=${call}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          this.setState({
            isLoaded: true,
            movies: jsonifiedResponse.results
          });
        })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error
        });
      });

  }

  componentDidUpdate() {
    this.makeApiCall()
  }

  handleChange(){

  }


  handleSubmit(event) {
    this.setState({ call: event.target.name.value });
    event.preventDefault();
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }


  render() {

    let currentlyVisibleState = null;
   
if (this.state.selectedMovie != null)  {
  currentlyVisibleState =  <MovieDetail  movie={this.state.selectedMovie} handleClick={this.handleClick} />

} else {
    currentlyVisibleState = 
    <div>
    <Search formSubmissionHandler={this.handleSubmit} onChange={this.handleChange} />
    <MovieList movies={this.state.movies}
      onMovieSelection={this.handleChangingSelectedMovie} isLoaded={this.state.isLoaded} error={this.state.error} />
    </div>
}
    return (
      <React.Fragment>
     {currentlyVisibleState}
    
     </React.Fragment>

    
    )
  }
}


export default MovieControl;








