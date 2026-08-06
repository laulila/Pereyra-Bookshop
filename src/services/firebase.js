import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBXBk-rlIG35tyi25IFuQXEg4wKcoLqP78",
  authDomain: "pereyra-bookshop.firebaseapp.com",
  projectId: "pereyra-bookshop",
  storageBucket: "pereyra-bookshop.firebasestorage.app",
  messagingSenderId: "712503184771",
  appId: "1:712503184771:web:45401545daf256b1427ab6",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);


