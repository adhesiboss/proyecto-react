import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBcvX3ZsNPnqN6g40_c7Fbcqh_S6Ixxd-g",
  authDomain: "ecomerce-coderhouse57755.firebaseapp.com",
  projectId: "ecomerce-coderhouse57755",
  storageBucket: "ecomerce-coderhouse57755.appspot.com",
  messagingSenderId: "410693455646",
  appId: "1:410693455646:web:e832d988b74b0617f1c30f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };