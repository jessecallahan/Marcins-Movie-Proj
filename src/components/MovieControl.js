import React from "react";
import "../styles.css";
import Search from './Search.js'
import MovieList from './MovieList.js'


class MovieControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      movies: [],
      call: 'polish'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.makeApiCall = this.makeApiCall.bind(this)
  }


  makeApiCall = () => {
    let call = this.state.call
    console.log(call)
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=abaeae31ed3533178d4c9e0e5b33a4c6&language=en-US&query=${call}&page=1&include_adult=false`)
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

  // componentDidMount() {
  //   this.makeApiCall()
  // }

  handleChange(){

  }


  handleSubmit(event) {
    this.setState({ call: event.target.name.value });
    this.makeApiCall()
    event.preventDefault();
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <Search formSubmissionHandler={this.handleSubmit} onChange={this.handleChange} />
        <MovieList movies={this.state.movies} isLoaded={this.state.isLoaded} error={this.state.error} />

      </div>
    )
  }
}


export default MovieControl;








