// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaWbtxI0nZ8uUh_3oF9UdhAFTzZWMomY4",
  authDomain: "jobhai-dcf46.firebaseapp.com",
  projectId: "jobhai-dcf46",
  storageBucket: "jobhai-dcf46.appspot.com",
  messagingSenderId: "196791138934",
  appId: "1:196791138934:web:0fd6f9fd64717d7c693d57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};