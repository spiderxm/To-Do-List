import firebase from 'firebase'              //firebase
import firestore from 'firebase/firestore'   //importing firestore
  var firebaseConfig = {
    apiKey: "AIzaSyBbYlmwPLcChrWVCiCXwsk_Pq5DO2B1fQw",
    authDomain: "to-do-list-75f66.firebaseapp.com",
    databaseURL: "https://to-do-list-75f66.firebaseio.com",
    projectId: "to-do-list-75f66",
    storageBucket: "to-do-list-75f66.appspot.com",
    messagingSenderId: "295829667502",
    appId: "1:295829667502:web:1e436100f400447e82373f",
    measurementId: "G-14119GJKFW"
  };
  // Initialize Firebase
 const firebaseApp =  firebase.initializeApp(firebaseConfig);
 firebase.analytics();
 export default firebaseApp.firestore();  //exporting database
