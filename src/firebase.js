import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4-HlOS4a36YZ3SbrNEoc4a9asF4iBy20",
  authDomain: "maabara-nexus.firebaseapp.com",
  projectId: "maabara-nexus",
  storageBucket: "maabara-nexus.firebasestorage.app",
  messagingSenderId: "968723302813",
  appId: "1:968723302813:web:a2c6f15bd3a3b4eadb4774",
  measurementId: "G-W0S1RC14CK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);