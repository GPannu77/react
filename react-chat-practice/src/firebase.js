import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBayxbci83D5kN84kwxIJIqz4FmsQNTn8U",
    authDomain: "react-chat-practice-4ce4b.firebaseapp.com",
    projectId: "react-chat-practice-4ce4b",
    storageBucket: "react-chat-practice-4ce4b.firebasestorage.app",
    messagingSenderId: "957288922158",
    appId: "1:957288922158:web:443edcc72544d57bd033bf"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);