import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDvDFb7ldolicU9yn36liV_lSkUJ6kAYWI",
    authDomain: "deets-backend.firebaseapp.com",
    databaseURL: "https://deets-backend-default-rtdb.firebaseio.com",
    projectId: "deets-backend",
    storageBucket: "deets-backend.appspot.com",
    messagingSenderId: "690136564520",
    appId: "1:690136564520:web:4285a3f52d8f31f921861d",
    measurementId: "G-ZC9NTFGJ7B"
  };
  
  
  let app = null;
  if(!firebase.apps.length) {
      app = firebase.initializeApp(firebaseConfig)
  }

export default firebase;