// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDziqZ_bGkj5WpHpxt6YePUV4idBe8AK7A",
  authDomain: "netflixgpt-d2ac0.firebaseapp.com",
  projectId: "netflixgpt-d2ac0",
  storageBucket: "netflixgpt-d2ac0.firebasestorage.app",
  messagingSenderId: "303579523436",
  appId: "1:303579523436:web:0e626057cbf94343766b49",
  measurementId: "G-ERB5QWL253"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();