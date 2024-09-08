// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs htmlFor Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// htmlFor Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz5yc_NzwemEpkgEyR_uZx2Rhn46XxA8w",
  authDomain: "internn-6e79d.firebaseapp.com",
  projectId: "internn-6e79d",
  storageBucket: "internn-6e79d.appspot.com",
  messagingSenderId: "651367917493",
  appId: "1:651367917493:web:b7df85cbadff216a871bfc",
  measurementId: "G-NZKVTV76FS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
