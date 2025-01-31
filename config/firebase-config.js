import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// This is like a api key to communicate with firebase database
const firebaseConfig = {
    apiKey: "AIzaSyBlTGTMKg0vINnt353MbgdJpQGBfyw9SIc",
    authDomain: "ems10-56e8c.firebaseapp.com",
    projectId: "ems10-56e8c",
    storageBucket: "ems10-56e8c.firebasestorage.app",
    messagingSenderId: "60862200581",
    appId: "1:60862200581:web:e92521fd8dd215b745956c"
  };


// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//we are connecting our application to database
export const db = getFirestore(app);
