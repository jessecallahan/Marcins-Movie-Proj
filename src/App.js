import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieControl from './components/MovieControl.js';

function App() {
  return (
    <React.Fragment>
      <MovieControl />
    </React.Fragment>
  );
}

export default App;

// REACT_APP_FIREBASE_API_KEY = "AIzaSyAVY5OXA8lev5fGqrQcm21X8dpoJlY68CI"
// REACT_APP_FIREBASE_AUTH_DOMAIN = "YOUR-PROJECT-NAME.firebaseapp.com"
// REACT_APP_FIREBASE_DATABASE_URL = "https://YOUR-PROJECT-NAME.firebaseio.com"
// REACT_APP_FIREBASE_PROJECT_ID = "YOUR-PROJECT-FIREBASE-PROJECT-ID"
// REACT_APP_FIREBASE_STORAGE_BUCKET = "YOUR-PROJECT-NAME.appspot.com"
// REACT_APP_FIREBASE_MESSAGING_SENDER_ID = "YOUR-PROJECT-SENDER-ID"
// REACT_APP_FIREBASE_APP_ID = "YOUR-PROJECT-APP-ID"