import React, { useEffect, useState } from 'react'
import { useCartContext } from '../../../context/CartContext/CartContext'
import BuyNow from '../../../components/BuyNow/BuyNow'
import { useAuthContext } from '../../../context/AuthContext/AuthContext'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { useFirebase } from '../../../context/FirebaseContext/FirebaseContext'
import { toast } from 'react-toastify'
// import { useCartContext } from '../../../context/CartContext/CartContext'
function Cart() {
  const {cartItems,cartDispatch}=useCartContext()
  const {user,getOrderData}=useAuthContext()
  const {db}=useFirebase()
const [order,setOrder]=useState({name:'',adress:"",pinCode:0,phoneNumber:'', 
  time: Timestamp.now(),
  date: new Date().toLocaleString(
      "en-US",
      {
          month: "short",
          day: "2-digit",
          year: "numeric",
      }
  )})
const shipping=20
const tax=10
const subTotal=cartItems.reduce((acc,item)=>{
  const {price,quantity}=item 
 return acc +(Number(price)*Number(quantity)) 
},0)
const total=subTotal+((subTotal+tax)/100)+shipping

const buyNow=()=>{
 const orderDetail={
user,
  cartItems,
order,
shipping,
tax,
subTotal,
total,
status:'confirm',
time: Timestamp.now(),
date: new Date().toLocaleString(
    "en-US",
    {
        month: "short",
        day: "2-digit",
        year: "numeric",
    }
)




}

try{
const orderRef=collection(db,"order")
addDoc(orderRef,orderDetail)
getOrderData()
toast('order successfully placed')


}
catch(error){
  console.log(error)
}
//  console.log(orderDetail)

}

  return (
    <div className="font-sans">
    <div className="grid lg:grid-cols-3">
      <div className="lg:col-span-2 p-6 bg-white overflow-x-auto">
        <div className="flex gap-2 border-b pb-4">
          <h2 className="text-2xl font-bold text-gray-800 flex-1">Shopping Cart</h2>
          <h3 className="text-base text-gray-800">{cartItems.length} Items</h3>
        </div>

        <table className="mt-6 w-full border-collapse divide-y">
          <thead className="whitespace-nowrap text-left">
            <tr>
              <th className="text-base text-gray-800 p-4">Description</th>
              <th className="text-base text-gray-800 p-4">Quantity</th>
              <th className="text-base text-gray-800 p-4">Price</th>
            </tr>
          </thead>

          <tbody className="whitespace-nowrap divide-y">
           {cartItems.map((value,index)=>{
            const {productName,price,quantity,imageUrl}=value
return(<>
 <tr>
              <td className="p-4">
                <div className="flex items-center gap-4 w-max">
                  <div className="h-32 shrink-0">
                    <img src={imageUrl} className="w-full h-full object-contain rounded-lg" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-gray-800">{productName}</p>
                    <button onClick={()=>{cartDispatch({type:"REMOVE",payload:{...value}})}} type="button" className="mt-2 font-semibold text-red-400 text-sm hover:text-red-600">
                      Remove
                    </button>
                  </div>
                </div>
              </td>
              <td className="p-4">
                <div className="flex divide-x border w-max rounded-lg overflow-hidden">
                  <button type="button"  onClick={()=>{cartDispatch({type:"DECREAMENT",payload:{...value,quantity}})}} className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 w-10 h-10 font-semibold  cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current" viewBox="0 0 124 124">
                      <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                    </svg>
                  </button>
                  <button type="button" className="bg-transparent w-10 h-10 font-semibold text-gray-800 text-base">
                    {quantity}
                  </button>
                  <button
                   onClick={()=>{cartDispatch({type:"INCREAMENT",payload:{...value,quantity}})}} type="button" className="flex justify-center items-center bg-gray-800 text-white w-10 h-10 font-semibold hover:bg-gray-600 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current cursor-pointer" viewBox="0 0 42 42">
                      <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td className="p-4">
                <h4 className="text-base font-bold text-gray-800">{price}Rs</h4>
              </td>
            </tr>

</>)
           })}

           
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 p-6 lg:sticky lg:top-0 lg:h-screen">
        <h2 className="text-2xl font-bold text-gray-800 border-b pb-4">Order Summary</h2>
        <ul className="text-gray-800 divide-y mt-6">
          <li className="flex flex-wrap gap-4 text-base py-3">Subtotal <span className="ml-auto font-bold">{subTotal}Rs</span></li>
          <li className="flex flex-wrap gap-4 text-base py-3">Shipping <span className="ml-auto font-bold">{shipping}Rs</span></li>
          <li className="flex flex-wrap gap-4 text-base py-3">Tax <span className="ml-auto font-bold">{tax}%</span></li>
          <li className="flex flex-wrap gap-4 text-base py-3 font-bold">Total <span className="ml-auto">{total}Rs</span></li>
        </ul>
<BuyNow order={order} setOrder={setOrder} buyNow={buyNow}/>
        {/* <button type="button" className="mt-6 text-base px-5 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg">Make Payment</button> */}
      </div>
    </div>
  </div>
  )
}

export default Cart