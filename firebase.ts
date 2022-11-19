// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt8pd86V4U19HoLhol2iujyJE1V32umgE",
  authDomain: "netflix-clone-a968a.firebaseapp.com",
  projectId: "netflix-clone-a968a",
  storageBucket: "netflix-clone-a968a.appspot.com",
  messagingSenderId: "93755361349",
  appId: "1:93755361349:web:d0a3d068c46f3b0176fb2c",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
