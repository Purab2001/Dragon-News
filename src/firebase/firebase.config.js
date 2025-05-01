// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGuKGeGBqgcy9qTURk1qqUVo4wtRPw_6M",
    authDomain: "dragon-news-5b009.firebaseapp.com",
    projectId: "dragon-news-5b009",
    storageBucket: "dragon-news-5b009.firebasestorage.app",
    messagingSenderId: "780235326105",
    appId: "1:780235326105:web:f8a1e418460ce70e1a2e08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;