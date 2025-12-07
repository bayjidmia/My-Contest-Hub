// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVWwwBTdgFuIb2ErPW0Pgc7ICSemhhE5o",
  authDomain: "contest-site-auth.firebaseapp.com",
  projectId: "contest-site-auth",
  storageBucket: "contest-site-auth.firebasestorage.app",
  messagingSenderId: "291518260076",
  appId: "1:291518260076:web:21a97ea07503605a4d0949",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
