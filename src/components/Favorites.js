import React from 'react'
import { useFirestore } from 'react-redux-firebase'
import firebase from "../firebase";

export default function Favorites(props) {
  const firestore = useFirestore()
  const user = firebase.auth().currentUser;

  function addToFavs() {
    console.log(props.movieprop.title)
    const objToFav = { favs: props.movieprop.title, email: user.email }
    return firestore.collection(user.email + ' favorites').add(objToFav)
  }

  return (
    <div>
      <button onClick={addToFavs}>
        Add to Favorites
      </button>
    </div>
  )
}