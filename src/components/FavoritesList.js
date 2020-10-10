import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import firebase from "../firebase";


export default function FavoritesList() {
  const user = firebase.auth().currentUser;
  console.log(user.email)

  const favorite = user.email

  useFirestoreConnect([{ collection: favorite }]);

  const favorites = useSelector(state => state.ordered);

  console.log(favorites)
  return (
    <ul>
      {favorites[favorite] &&
        favorites[favorite].map((todo) => (
          <li>
            id: {todo.id} movie-title: {todo.favs} smiley face: ":)"
          </li>
        ))}
    </ul>
  )
}
