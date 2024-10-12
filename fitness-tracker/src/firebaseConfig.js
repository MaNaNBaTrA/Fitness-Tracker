// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDxEzexC4_Eq9fuRGKn5Es4cbK_Dhgg6qg",
    authDomain: "fitness-tracker-2ad70.firebaseapp.com",
    projectId: "fitness-tracker-2ad70",
    storageBucket: "fitness-tracker-2ad70.appspot.com",
    messagingSenderId: "712851926904",
    appId: "1:712851926904:web:dd0a99bd152078f972a28d",
    measurementId: "G-HVKQLTX19F"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
