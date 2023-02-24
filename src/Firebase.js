// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOrsWZZhuGhhquY0KMv0ny6HvIsc8qk7w",
  authDomain: "todo-app-8b4bd.firebaseapp.com",
  projectId: "todo-app-8b4bd",
  storageBucket: "todo-app-8b4bd.appspot.com",
  messagingSenderId: "538848405070",
  appId: "1:538848405070:web:618719c971bd0c7396451f",
  measurementId: "G-N5BJXMRWEL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
