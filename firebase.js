import * as firebase from 'firebase';
require('@firebase/firestore')
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCNb_GlqMd3Rrl6yFhywcaq7ZiVjRfwYsY",
    authDomain: "ukrainianschoolforboyslibrary.firebaseapp.com",
    projectId: "ukrainianschoolforboyslibrary",
    storageBucket: "ukrainianschoolforboyslibrary.appspot.com",
    messagingSenderId: "584690782084",
    appId: "1:584690782084:web:8c4af2af5a083dbbadd7d1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();