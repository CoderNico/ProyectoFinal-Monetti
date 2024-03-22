import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDoJbNHmpviLQ2HoIhM07rf3eVkdGVE4d8",
  authDomain: "curso-coder-comision--60720.firebaseapp.com",
  projectId: "curso-coder-comision--60720",
  storageBucket: "curso-coder-comision--60720.appspot.com",
  messagingSenderId: "201062038122",
  appId: "1:201062038122:web:3634c3ebcc30d51b15a813"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);