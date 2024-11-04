

import React from 'react';
import { Navigate, Outlet, replace } from 'react-router-dom';

function ProtectedRouteForAdmin({ children,isAuth }) {
if(!isAuth) return <Navigate to={"Auth/Login"}/>
// if(isAdmin) return <Navigate to={"/"}/>
else return <Outlet/>

 ;
}

export default ProtectedRouteForAdmin;

