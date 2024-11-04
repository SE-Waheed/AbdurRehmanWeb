// import { useFirebase } from "../FirebaseContext/FirebaseContext";
// import { useFirebase } from "../FirebaseContext/FirebaseContext";
import { toast } from "react-toastify";
import { useState, createContext, useContext, useReducer, useEffect } from "react";
import {collection,doc, addDoc,getDocs, Timestamp } from 'firebase/firestore';
import { db } from "../FirebaseContext/FirebaseContext";
import { firebaseAuth, useFirebase } from "../FirebaseContext/FirebaseContext";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext=createContext(null)
export const  useAuthContext=()=>useContext(AuthContext)

const initialState={isAuth:false ,user:{}}

const reducer=(info,{type,payload})=>{
switch(type){
case "SET_LOGGED_IN" :return {isAuth :true,user : payload.user}
case "SET_LOGGED_OUT" :return initialState
default:return info 
}

}
export default function AuthContextProvider ({children}){
    
    const [info,dispatch]=useReducer(reducer,initialState)
    const [productArray,setProductsArray]=useState([{}])
    const [userArray,setUserArray]=useState([{}])
    const [orderArray,setOrderArray]=useState([{}])

   

    //get product array
    const getData=async()=>{
        const querySnapshot = await getDocs(collection(db, "product"));
        const array=[]
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          array.push({...doc.data(),id:doc.id})
        })
        setProductsArray(array)
    }
 //get user array
 const getUserData=async()=>{
    const querySnapshot = await getDocs(collection(db, "user"));
    const array=[]
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      array.push({...doc.data(),id:doc.id})
    })
    setUserArray(array)
}
// get order data
const getOrderData=async()=>{
    const querySnapshot = await getDocs(collection(db, "order"));
    const array=[]
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      array.push({...doc.data(),id:doc.id})
    })
    setOrderArray(array)
}

useEffect(()=>{
    getData()
    getUserData()
    getOrderData()
},[])

   

    return(
<AuthContext.Provider value={{...info,dispatch,productArray,getData,userArray,orderArray, getOrderData}}>
{children}
</AuthContext.Provider>
    )



}






