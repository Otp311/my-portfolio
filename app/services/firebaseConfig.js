import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDTrkFWWzkTWTWDDFe5QbBUa0u1qEM7OsI",
  authDomain: "portfolio-67710.firebaseapp.com",
  projectId: "portfolio-67710",
  storageBucket: "portfolio-67710.appspot.com",
  messagingSenderId: "897728549715",
  appId: "1:897728549715:web:1350e20a6ebdbb227007a6",
  measurementId: "G-ZEKZESG88V"
};


const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };