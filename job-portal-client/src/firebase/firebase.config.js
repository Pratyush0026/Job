// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqfdpmKSabuO9HjczyFijpRg4FW9noaGA",
  authDomain: "job-portal-demo-a81cf.firebaseapp.com",
  projectId: "job-portal-demo-a81cf",
  storageBucket: "job-portal-demo-a81cf.appspot.com",
  messagingSenderId: "917696152080",
  appId: "1:917696152080:web:ed17e014bc2cecedf80095"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;