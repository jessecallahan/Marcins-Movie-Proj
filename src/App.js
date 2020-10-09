import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieControl from './components/MovieControl.js';
import Signin from "./components/SignIn";
import Search from "./components/Search";
import FavoritesList from "./components/FavoritesList"
import Header from "./components/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <Header />
      <Switch>
      <Route path="/search">
          <Search />
        </Route>
      <Route path="/favoriteslist">
          <FavoritesList />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
          <MovieControl />
        </Route>
      </Switch>
  </Router>
    
  );
}

export default App;

