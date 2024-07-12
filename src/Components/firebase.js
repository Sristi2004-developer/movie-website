// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI717WBaKHwBf5-RUD7vj3TJyhIzfRllA",
  authDomain: "movie-website-9f7ab.firebaseapp.com",
  projectId: "movie-website-9f7ab",
  storageBucket: "movie-website-9f7ab.appspot.com",
  messagingSenderId: "720939771642",
  appId: "1:720939771642:web:bcf3a7e5608fdd83d9cb43",
  measurementId: "G-3593H1WZZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db=getFirestore(app);
export {db};