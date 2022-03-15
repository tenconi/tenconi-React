import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'; 

//Este codigo permite autenticarnos en Firebase - >>> ESCONDER <<<
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "${process.env.REACT_APP_API_KEY}",
  authDomain: "${process.env.REACT_APP_API_AUTO_DOMAIN}",
  projectId: "thunder-rjs",
  storageBucket: "thunder-rjs.appspot.com",
  messagingSenderId: "255086547249",
  appId: "${process.env.REACT_APP_API_ID}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);