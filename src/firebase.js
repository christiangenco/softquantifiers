// Import firebase from Firebase library
import firebase from "firebase/compat/app";

// Import Firestore to interact with the database
import "firebase/compat/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9zxMNr3DVyOOVCmNTEDzXRLWXywXDoPM",
  authDomain: "vaguequantifiers.firebaseapp.com",
  projectId: "vaguequantifiers",
  storageBucket: "vaguequantifiers.appspot.com",
  messagingSenderId: "916915795728",
  appId: "1:916915795728:web:9632b6c5715630cdb21795",
  measurementId: "G-650NVTXG78",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

// Initialize Firestore
const db = firebase.firestore();

// Export Firestore database
export default db;
