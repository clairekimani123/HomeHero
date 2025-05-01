// firebase.js
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

// Firebase configuration using environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};
console.log("API Key: ", import.meta.env.VITE_FIREBASE_API_KEY);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// Auth utility functions
export const googleSignIn = () => signInWithPopup(auth, provider);
export const emailSignUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const emailSignIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const logOut = () => signOut(auth);

export const onAuthUserStateChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};