import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDa1FtjosGBAFm8O4zQEZRpHlXDRXiZ_vs",
  authDomain: "ecommerce-ba10a.firebaseapp.com",
  projectId: "ecommerce-ba10a",
  storageBucket: "ecommerce-ba10a.appspot.com",
  messagingSenderId: "188866149241",
  appId: "1:188866149241:web:773c3bd096975b50830da8"
};


const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth};