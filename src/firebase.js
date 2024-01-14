// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCj4eO2fquIAZ-dZuK-MozsBsLTBE9sKZU",
  authDomain: "little-lemon-2024.firebaseapp.com",
  projectId: "little-lemon-2024",
  storageBucket: "little-lemon-2024.appspot.com",
  messagingSenderId: "313567268053",
  appId: "1:313567268053:web:b26f3f5b6417dfb893e65c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;