import { createContext, useContext } from "react";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { addDoc, Timestamp } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { toast } from 'react-toastify';


const FirebaseContext = createContext(null);
const firebaseConfig = {
  apiKey: "AIzaSyCeDEgMmj200M-dV8CBvYWQVPnGL-FSb-c",
  authDomain: "store-83d52.firebaseapp.com",
  projectId: "store-83d52",
  storageBucket: "store-83d52.appspot.com",
  messagingSenderId: "455437723587",
  appId: "1:455437723587:web:e9a354753693d83927bf76"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export  const firebaseAuth = getAuth(app);
export const useFirebase=()=>useContext(FirebaseContext)

export const FirebaseProvider = ({children}) => {
  return (
    // 
    <FirebaseContext.Provider value={{firebaseAuth,db}}>
      {children}
    </FirebaseContext.Provider>
  );
};