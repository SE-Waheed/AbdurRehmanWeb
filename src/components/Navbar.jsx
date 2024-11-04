import React from 'react'
import {  NavLink } from 'react-router-dom'
import { useEffect } from 'react';
import { useFirebase } from '../context/FirebaseContext/FirebaseContext';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged , signOut} from "firebase/auth";
import { doc , getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useAuthContext } from '../context/AuthContext/AuthContext';
import { useCartContext } from '../context/CartContext/CartContext';
function Navbar() {

  const{firebaseAuth,db}=useFirebase()
const {isAuth,user,dispatch}=useAuthContext()
const {cartItems,cartDispatch}=useCartContext()

useEffect(
  ()=>{
  onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        const uid=user.uid
        const getSingleProductData=async()=>{
          const userDocRef = doc(db, "user", uid);
          const userDocSnap = await getDoc(userDocRef);
          const docData=userDocSnap.data()
    dispatch({type:"SET_LOGGED_IN",payload:{user:docData}}) 

        } 
        getSingleProductData()
        // ...
      } else {
        // User is signed out
        // ...
     
      }
    });
},[])

const handleSignout=()=>{
  signOut(firebaseAuth).then(() => {
    dispatch({type:"SET_LOGGED_OUT"})
    toast('log out successfully')
    Navigate("/")
  }).catch((error) => {
    // An error happened.
  });
}
  return (<>
  

<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </NavLink>
  <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo"/>
      </button>
      {/* <!-- Dropdown menu --> */}
      <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">{user.name}</span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{user.email}</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">

{isAuth ?
<>
           {user?.role==="admin" ?  <li>
            <NavLink to='admin/Dashboard' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</NavLink>
          </li>:<li></li>}
          <li>
  <a href="#" onClick={handleSignout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
</li>
   
</>
:
<>
   <li>
   <NavLink to="/Auth/Registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">signUp</NavLink>
    </li>
<li>
   <NavLink to="/Auth/Login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log in</NavLink>
          </li>
        
</>
}

        
       
        </ul>
      </div>
<NavLink to='/Cart'>
<span className="relative ">
      <div className='mx-3'>
      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
          className="cursor-pointer hover:fill-[#007bff] inline " viewBox="0 0 512 512">
          <path
            d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
            data-original="#000000"></path>
        </svg>
        <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">{cartItems.length}</span>


      </div>
      </span>
</NavLink>
     


      <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <NavLink to="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</NavLink>
      </li>
      <li>
        <NavLink to="/About" className={({isActive})=>
          ` block py-2 px-3  rounded hover:bg-gray-100 ${isActive  ?"text-blue-700"  : "text-gray-900"} md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`
        }>product</NavLink>
      </li>
      <li>
        <NavLink to="/userDashboard"  className={({isActive})=>
`${isActive ? "text-blue-700":"text-gray-900"} block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`
        }>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/watchList"  className={({isActive})=>
`${isActive ? "text-blue-700":"text-gray-900"} block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`
        }>WatchList</NavLink>
      </li>
      <li>
        <NavLink to='/ContactUs' className={({isActive})=>
`${isActive ? "text-blue-700":"text-gray-900"} block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`
        }>Contact</NavLink>
      </li>
    </ul>
  </div>
  </div>
</nav>

  
  </>
 
  )
}

export default Navbar