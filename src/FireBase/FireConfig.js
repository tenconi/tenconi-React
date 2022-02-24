// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from 'firebase/firestore'; 

//Este codigo permite autenticarnos en Firebase - >>> ESCONDER <<<
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAWRr3LW9fsoMEf-TOOlcWeFbUwc7C0Fo",
  authDomain: "thunder-rjs.firebaseapp.com",
  projectId: "thunder-rjs",
  storageBucket: "thunder-rjs.appspot.com",
  messagingSenderId: "255086547249",
  appId: "1:255086547249:web:5825e42835ba0a9cf96010"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);//metodo que nos permite inicializar nuestra App, le pasamos el firebaseConfig, y la alojamps en app

export const db = getFirestore(app);