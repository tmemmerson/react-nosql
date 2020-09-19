import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnKOMoLytuQqvHpvoJsf36XQ5HFKhbSPU",
  authDomain: "redux-help-queue-dd8b3.firebaseapp.com",
  databaseURL: "https://redux-help-queue-dd8b3.firebaseio.com",
  projectId: "redux-help-queue-dd8b3",
  storageBucket: "redux-help-queue-dd8b3.appspot.com",
  messagingSenderId: "463566998552",
  appId: "1:463566998552:web:ac545f91b18dc5f3cd476d",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
