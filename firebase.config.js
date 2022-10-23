// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-_ivOQF90PskHMpethdlM2dGYp4l23KM",
  authDomain: "fish-category-auth.firebaseapp.com",
  projectId: "fish-category-auth",
  storageBucket: "fish-category-auth.appspot.com",
  messagingSenderId: "779915754056",
  appId: "1:779915754056:web:1d788d4dbe3ca3dd85b67d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;