import firebase from 'firebase/app'
import 'firebase/firestore'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBt3YCBg5rzi_SB_5HcjnUaNTMINHQV1PQ",
    authDomain: "proyectofinal-6555f.firebaseapp.com",
    databaseURL: "https://proyectofinal-6555f.firebaseio.com",
    projectId: "proyectofinal-6555f",
    storageBucket: "proyectofinal-6555f.appspot.com",
    messagingSenderId: "783567379561",
    appId: "1:783567379561:web:91f51dd68ad4b6ee8c96f8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase 