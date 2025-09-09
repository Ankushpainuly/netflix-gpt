// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI8uGL8l51346acwlYryCrlmsQRtqbSXw",
  authDomain: "netflixgpt-6485b.firebaseapp.com",
  projectId: "netflixgpt-6485b",
  storageBucket: "netflixgpt-6485b.firebasestorage.app",
  messagingSenderId: "488758972231",
  appId: "1:488758972231:web:49d928db9f6123765a4662",
  measurementId: "G-2EY21L6YLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 

export const auth = getAuth();