import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAYj3zRBJK9iqEpXTPovhqEhS_GOwFlCgs",
  authDomain: "vexbook-b5094.firebaseapp.com",
  projectId: "vexbook-b5094",
  storageBucket: "vexbook-b5094.appspot.com",
  messagingSenderId: "114923246682",
  appId: "1:114923246682:web:e467727d8d47e06028b463"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore()

const storage = firebase.storage();

export { db, storage}; 