import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXa-lp0rSNLtSI7wzWo4ZcqtK-K_3Dv2k",
  authDomain: "chapter-9-b7e00.firebaseapp.com",
  projectId: "chapter-9-b7e00",
  storageBucket: "chapter-9-b7e00.appspot.com",
  messagingSenderId: "857505671924",
  appId: "1:857505671924:web:975abc61a80e758d030ca1",
  measurementId: "G-R07PT89MW1",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
