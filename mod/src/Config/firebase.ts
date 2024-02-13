// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//getAuth tells firebase that we will get Authentication
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCPI1YBsdoEEsjf5B_pCXlHS6zVua8pCI",
  authDomain: "react-76bac.firebaseapp.com",
  projectId: "react-76bac",
  storageBucket: "react-76bac.appspot.com",
  messagingSenderId: "912272730579",
  appId: "1:912272730579:web:d24907b538641dbdef6726",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
