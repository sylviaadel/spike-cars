import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const setup = {
  apiKey: "AIzaSyDf4fMGLAD81LMNoO7O_Ogqdh7CPQEfBl4",
  authDomain: "sylvia-spike-cars.firebaseapp.com",
  projectId: "sylvia-spike-cars",
  storageBucket: "sylvia-spike-cars.appspot.com",
  messagingSenderId: "60708292585",
  appId: "1:60708292585:web:a82becb819137487ee2d78",
};

const firebase = initializeApp(setup);

export const database = getFirestore(firebase);
