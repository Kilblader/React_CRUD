import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCox8_zWep_nEAFJmEjpUZKtCSXWlZj2N8",
  authDomain: "sql-project-68fc0.firebaseapp.com",
  projectId: "sql-project-68fc0",
  storageBucket: "sql-project-68fc0.appspot.com",
  messagingSenderId: "751792140922",
  appId: "1:751792140922:web:97a4c9fae8fa59811ac1c3",
  measurementId: "G-MPYCPY6G9S",
};

// Initialize FireBase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
