// import { Sidebar } from '@/components/ui/sidebar'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import React from 'react'

function Order() {
  return (
    <div className="flex">
         <Sidebar />
         <main className="flex-1 p-4">
          <Outlet/>
         </main>
      </div>
  )
}

export default Order