// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCotvFgDiKHrk_FJq5ZeOj4L4v_uTBJvoQ",
  authDomain: "storybook-react-78d41.firebaseapp.com",
  projectId: "storybook-react-78d41",
  storageBucket: "storybook-react-78d41.appspot.com",
  messagingSenderId: "547262026600",
  appId: "1:547262026600:web:2921b85b05ec32b39b7cdd",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
