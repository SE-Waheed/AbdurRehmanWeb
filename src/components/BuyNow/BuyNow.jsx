// import button from 'kutty/src/button'
import React, { useState } from 'react'

function BuyNow({order,setOrder,buyNow}) {
    console.log(order)
    const [model,setModel]=useState(false)
    const handleChange=(e)=>{
setOrder((s)=>({...s,[e.target.name]:e.target.value}))
    }
    const handleBuyNow=(e)=>{
        e.preventDefault()
        buyNow()
        setModel(false)
       
    }
   
  return (
   <>


{/* <!-- Modal toggle --> */}
<button type="button" onClick={()=>{setModel(true)}} className="mt-6 text-base px-5 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg">Buy Now</button>

{model && 
<div  className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">

    <div className="relative p-4 w-full max-w-md max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Create New Product
                </h3>
                <button type="button" onClick={()=>{setModel(false)}} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            {/* <!-- Modal body --> */}
            <form className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" onChange={handleChange}name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required=""/>
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="adress" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">adress</label>
                        <input type="text" onChange={handleChange} name="adress" id="adress" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="adress" required=""/>
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="pinCode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">pinCode</label>
                        <input onChange={handleChange} type="text" name="pinCode" id="pinCode" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="pinCode" required=""/>
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">phone Number</label>
                        <input onChange={handleChange} type="text" name="phoneNumber" id="phoneNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="phoneNumber" required=""/>
                    </div>
                 
                </div>
                <button type="submit" onClick={handleBuyNow} className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    
                  Order 
                </button>
            </form>
        </div>
    </div>
</div>  }



   </>
  )
}

export default BuyNow