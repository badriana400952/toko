import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import { getStorage } from '@firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBfnvT2ZgcPYiO2HQhvQeOr0vghiaQNlRo",
  authDomain: "toko-d8701.firebaseapp.com",
  projectId: "toko-d8701",
  storageBucket: "toko-d8701.appspot.com",
  messagingSenderId: "777256590443",
  appId: "1:777256590443:web:1d13acfe7debbe8c28e52e",
  measurementId: "G-7BFE6KQT15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
