import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

  var firebaseConfig = {
    apiKey: "AIzaSyDR2vwqyO9abrY6Z6RpWKRTVIgD51Z_cIM",
    authDomain: "react-slack-clone-2b078.firebaseapp.com",
    projectId: "react-slack-clone-2b078",
    storageBucket: "react-slack-clone-2b078.appspot.com",
    messagingSenderId: "793377994225",
    appId: "1:793377994225:web:adbdcf3b0d7091158d0050",
    measurementId: "G-0KR2T0VDXF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;