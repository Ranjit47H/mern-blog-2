// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-app-2.firebaseapp.com",
  projectId: "mern-blog-app-2",
  storageBucket: "mern-blog-app-2.appspot.com",
  messagingSenderId: "244351876853",
  appId: "1:244351876853:web:7942261a572a28a0704fbc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
