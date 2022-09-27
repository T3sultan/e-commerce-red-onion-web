// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOkvKjsCProZspt_gHlrOje2FLRfXAhV8",
  authDomain: "e-commerce-red-onion.firebaseapp.com",
  projectId: "e-commerce-red-onion",
  storageBucket: "e-commerce-red-onion.appspot.com",
  messagingSenderId: "108442353081",
  appId: "1:108442353081:web:d79eeefa942708b42bca68",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
