

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBQfjLJIlR2XgIaUuFBVHN5YA2bpLWiNI",
  authDomain: "clone-65824.firebaseapp.com",
  projectId: "clone-65824",
  storageBucket: "clone-65824.appspot.com",
  messagingSenderId: "867313859786",
  appId: "1:867313859786:web:31f9e139c5859df49e8833",
  measurementId: "G-BRNBRQFGLC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);