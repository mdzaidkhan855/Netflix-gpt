// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqYX4Y0wpyWwtT76Id-GLalMHIXVmSzyY",
  authDomain: "netflixgpt-ec68b.firebaseapp.com",
  projectId: "netflixgpt-ec68b",
  storageBucket: "netflixgpt-ec68b.appspot.com",
  messagingSenderId: "144550803889",
  appId: "1:144550803889:web:748e5c05be9be348a9e590",
  measurementId: "G-7KH3YL1H2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Uncomment when to use analytics
//const analytics = getAnalytics(app);


export const auth = getAuth();