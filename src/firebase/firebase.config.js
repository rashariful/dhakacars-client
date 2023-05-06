// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCsFaIQpZ66UGNiB6B4rv0TcgKLAmiVtTI",
    authDomain: "dhakacars-2bc3a.firebaseapp.com",
    projectId: "dhakacars-2bc3a",
    storageBucket: "dhakacars-2bc3a.appspot.com",
    messagingSenderId: "36704628924",
    appId: "1:36704628924:web:92984d646c813dff2f20b9",
    measurementId: "G-H49V89J3LP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app