import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByKGPJ0BNyFb-fWbzdMQ5XJPplkhS7ly8",
  authDomain: "book-store-clients.firebaseapp.com",
  projectId: "book-store-clients",
  storageBucket: "book-store-clients.appspot.com",
  messagingSenderId: "443156182649",
  appId: "1:443156182649:web:e8ecf4a13532a06ca986a8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
