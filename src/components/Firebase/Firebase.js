import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyACLqUo_3jWL1TQgzIlnHlcXzdVayKu2Ak",
    authDomain: "programacionweb-cb851.firebaseapp.com",
    databaseURL: "https://programacionweb.firebaseio.com",
    projectId: "programacionweb-cb851",
    storageBucket: "programacionweb-cb851.appspot.com",
    messagingSenderId: "500471834450",
  };
  firebase.initializeApp(config);

  export default firebase;