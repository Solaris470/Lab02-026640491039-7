// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';  

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhKibs0lhveApy8KFmgiPWN_yX_mqIebM",
  authDomain: "react-app-sunny.firebaseapp.com",
  projectId: "react-app-sunny",
  storageBucket: "react-app-sunny.appspot.com",
  messagingSenderId: "380171454040",
  appId: "1:380171454040:web:bf7f14f559eb793d7b6c2d",
  measurementId: "G-JCPJNHKDKX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;