import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZQfi5Pa7JxeNBBFQWTaPAuYI2HKIFOw4",
  authDomain: "learn-firebase-e181b.firebaseapp.com",
  projectId: "learn-firebase-e181b",
  storageBucket: "learn-firebase-e181b.appspot.com",
  messagingSenderId: "805695057330",
  appId: "1:805695057330:web:8413c7dfd5f66c793188ab",
  measurementId: "G-5Y8M8XTSEV"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes")