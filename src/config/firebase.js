// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbYjLJvD55MLaA0NdP4D4WAfM0xFKw33E",
  authDomain: "ecommerce-app-bba64.firebaseapp.com",
  projectId: "ecommerce-app-bba64",
  storageBucket: "ecommerce-app-bba64.appspot.com",
  messagingSenderId: "411525627149",
  appId: "1:411525627149:web:c641f3403326e752c8c444",
  measurementId: "G-0XELFSKPJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {analytics, auth , firestore, storage}
