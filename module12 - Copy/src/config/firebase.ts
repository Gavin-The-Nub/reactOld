// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMMtrYAURoe_wrZZr07BfO2vkO2hKPy7A",
  authDomain: "react-course-1c574.firebaseapp.com",
  projectId: "react-course-1c574",
  storageBucket: "react-course-1c574.appspot.com",
  messagingSenderId: "767233898531",
  appId: "1:767233898531:web:416d6244e986dd08581996",
};

// Initialize Firebase
let app = initializeApp(firebaseConfig);

export let auth = getAuth(app);
export let provider = new GoogleAuthProvider();
export let db = getFirestore(app);
