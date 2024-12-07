import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDzJOAyYPmIKxdb87CQfna-VQyxUxll-P0",
    authDomain: "medicalwebsite-fe7f4.firebaseapp.com",
    projectId: "medicalwebsite-fe7f4",
    storageBucket: "medicalwebsite-fe7f4.firebasestorage.app",
    messagingSenderId: "723138339305",
    appId: "1:723138339305:web:b712bcbea0f7c82725ab78",
    measurementId: "G-7EGHXS8L46"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log("Firebase initialized:", app.name); // Debug log
