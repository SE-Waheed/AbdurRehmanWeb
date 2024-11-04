import { useAuthContext } from '@/context/AuthContext/AuthContext'
import React from 'react'
// import { Outlet } from 'react-router-dom'

function OrderHistory() {
  
  const {user,orderArray}=useAuthContext()
  console.log(user)
 
  console.log(orderArray)


  return (
    
    <>
    
   <div className="font-[sans-serif] overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="whitespace-nowrap">
          <tr>
           
            <th className="p-4 text-left text-sm font-semibold text-gray-800">
           Name
            </th>
            <th className="p-4 text-left text-sm font-semibold text-gray-800">
             order Status
             
            </th>
            <th className="p-4 text-left text-sm font-semibold text-gray-800">
            DAte
            
            </th>
            <th className="p-4 text-left text-sm font-semibold text-gray-800">
           quantity
            </th>
            <th className="p-4 text-left text-sm font-semibold text-gray-800">
             total price
            </th>
          
          </tr>
        </thead>
        {orderArray.filter((obj)=>obj.user.uid===user.uid).map((value,index)=>
        
        {
          
          return(
         <>
            <tbody key={index} className="whitespace-nowrap">
            <tr className="odd:bg-blue-50">
             
              <td className="p-4 text-sm text-gray-800">
          {value.user.name}
  
              </td>
              <td className="p-4 text-sm text-gray-800">
                <span
                  className="w-[68px] block text-center py-1 border border-green-500 text-green-600 rounded text-xs">{value.status}</span>
              </td>
              <td className="p-4 text-sm text-gray-800">
                {value.date}
              </td>
              <td className="p-4 text-sm text-gray-800">
              {value.cartItems.length}
              </td>
              <td className="p-4 text-sm text-gray-800">
                <div className="flex items-center cursor-pointer">
                  {/* <img src='https://readymadeui.com/profile_4.webp' className="w-7 h-7 rounded-full shrink-0" /> */}
                  <div className="ml-4">
                    <p className="text-sm text-gray-800">{value.subTotal}</p>
                  </div>
                </div>
              </td>
       
            </tr>
  
  
          </tbody>
         </>
          )
        })}
      
      </table>
    </div>
   
    </>
  )
}

export default OrderHistory