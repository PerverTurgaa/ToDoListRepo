// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3uXC-0F-DuGeGMjfmXfqHDqKpl8ohkiE",
  authDomain: "todo-app-7ebe6.firebaseapp.com",
  projectId: "todo-app-7ebe6",
  storageBucket: "todo-app-7ebe6.appspot.com",
  messagingSenderId: "1077595030269",
  appId: "1:1077595030269:web:a40b32bbcf011ebed27494"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)