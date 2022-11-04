// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkR6F4SFlVn0exXkIzfddTCiHsMv8UL04",
    authDomain: "car-doctor-c02f4.firebaseapp.com",
    projectId: "car-doctor-c02f4",
    storageBucket: "car-doctor-c02f4.appspot.com",
    messagingSenderId: "716842402608",
    appId: "1:716842402608:web:2f1f267e575ad9aca8fef5"

    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app