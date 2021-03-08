import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyAYFbGya8DFxXxn1PBH6_9c28QL0nEsQDQ",
  authDomain: "slack-clone-ef5ef.firebaseapp.com",
  projectId: "slack-clone-ef5ef",
  storageBucket: "slack-clone-ef5ef.appspot.com",
  messagingSenderId: "780298464513",
  appId: "1:780298464513:web:5aa9d46a3ae90f81003f00",
  measurementId: "G-N20W55NLKC"
};
firebase.initializeApp(config);

export default firebase;
