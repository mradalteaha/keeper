import firebase from './firebase'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyBVCR38gCa-e3tZXdKzeAWrEA-vZyyJw3I",
    authDomain: "keeperapp-ffa8f.firebaseapp.com",
    databaseURL: "https://keeperapp-ffa8f-default-rtdb.firebaseio.com",
    projectId: "keeperapp-ffa8f",
    storageBucket: "keeperapp-ffa8f.appspot.com",
    messagingSenderId: "663985771385",
    appId: "1:663985771385:web:50d674081d4def1abf95a8",
    measurementId: "G-FDSRQ45SSR"
  };
  firebase.initializeApp(firebaseConfig)

  const databaseRef = firebase.database().ref()
  export default firebase ;
  export const noteRef = databaseRef.child("notes");
 