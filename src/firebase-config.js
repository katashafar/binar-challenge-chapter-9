import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-DEQ5OCy1T7F3elfyOL7SHMQgTsOOekU",
  authDomain: "chapter9-78aef.firebaseapp.com",
  databaseURL:
    "https://chapter9-78aef-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chapter9-78aef",
  storageBucket: "chapter9-78aef.appspot.com",
  messagingSenderId: "583058089391",
  appId: "1:583058089391:web:1d16046229ac66ea8f3b5a",
  measurementId: "G-0BTYLVSPLB",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
