// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAD6Kn4Z16atEJmufFh4C5oUlzr976f0zM",
    authDomain: "simple-firebase-1fc01.firebaseapp.com",
    projectId: "simple-firebase-1fc01",
    storageBucket: "simple-firebase-1fc01.firebasestorage.app",
    messagingSenderId: "221141786898",
    appId: "1:221141786898:web:0dcee509dc003d7206d3cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app