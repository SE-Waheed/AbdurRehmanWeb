import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Products/Order/Sidebar'
function UserDashboard() {
  return (
    <>
    <div className="flex">
         <Sidebar />
         <main className="flex-1 p-4">
          <Outlet/>
         </main>
      </div>
    </>
  )
}

export default UserDashboard