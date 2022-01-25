// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKcxfsINM4VVGjIhOyRsDTXv-Ym3nbLZY",
  authDomain: "crud-consware.firebaseapp.com",
  projectId: "crud-consware",
  storageBucket: "crud-consware.appspot.com",
  messagingSenderId: "1072926204931",
  appId: "1:1072926204931:web:7ffc187c7da1c2341c9a36"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;