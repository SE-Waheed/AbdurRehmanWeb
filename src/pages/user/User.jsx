import React from 'react'
import { useAuthContext } from '../../context/AuthContext/AuthContext'

function User() {
    const {user,orderArray}=useAuthContext()

  return (
    <>
 {orderArray.filter((item)=>item.user.uid===user.uid).map((value,index)=>{
    return(
    <>
    
    <section key={index} className="py-4 my-6 relative h-auto border-2 border-black">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full flex-col justify-start items-center lg:gap-12 gap-8 inline-flex">
                <div className="flex-col justify-start items-center gap-3 flex">
                    <h2 className="text-center text-gray-900 text-2xl font-bold font-manrope leading-normal">{value.user.name}, Thank You for Your Order!</h2>
                    <p className="max-w-xl text-center text-gray-500 text-sm font-normal leading-8">Your order is in good hands! We'll notify you once it's en route. For now, here's a snapshot of your purchase</p>
                </div>
                <div className="w-full flex-col justify-start items-center lg:gap-10 gap-8 flex">
                    <div className="w-full flex-col justify-start items-start gap-6 flex">
                        <div className="w-full flex-col justify-start items-start gap-5 flex">
                            <div className="w-full md:px-6 px-2 py-4 border-y border-gray-200 justify-between items-center inline-flex">
                                <h3 className="text-gray-900 text-sm font-medium leading-8">Item</h3>
                                <h3 className="text-right text-gray-900 text-sm font-medium leading-8">Total</h3>
                            </div>
                       
                                {/* start */}
                                {value.cartItems.map((value,index)=>
                                {
                                    
                                   const {productName,quantity,price,imageUrl} =value
                                    return(
                                    <>
                                         <div key={index} className="w-full md:px-6 px-2 pb-5  justify-between items-center gap-8 inline-flex border-b border-gray-300">
                                    <div className="justify-start items-center gap-2 flex md:pb-5">
                                    <img className=' h-32' 
                                    src={imageUrl}
                                    alt="Simple Black T-shirt image" />
                                    <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                                        <h5 className="text-gray-900 text-sm font-semibold leading-relaxed">{productName}</h5>
                                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">{quantity}</h6>
                                    </div>
                                </div>
                                <h4 className="text-right text-gray-900 text-lg font-medium leading-relaxed">{price}Rs</h4>
                            </div>

                                </>)})}
                                
                        </div>
                        <div className="w-full md:pt-6 justify-start items-center gap-5 flex md:flex-row flex-col">
                            <div className="w-full md:px-6 px-2 flex-col justify-start items-start gap-5 inline-flex md:border-r md:border-b-0 border-b md:pb-0 pb-5 border-gray-200">
                                <div className="w-full justify-between items-center inline-flex gap-4">
                                    <h5 className="text-gray-500 text-sm font-normal leading-relaxed">Estimated Delivery:</h5>
                                    <h5 className="text-right text-gray-500 text-sm font-normal leading-relaxed">Friday, 3rd Jun 2023</h5>
                                </div>
                                <div className="w-full justify-between items-center inline-flex gap-4 border-y border-gray-200 py-5">
                                    <h5 className="text-gray-500 text-sm font-normal leading-relaxed">Delivery Address:</h5>
                                    <h5 className="text-right text-gray-500 text-sm font-normal leading-relaxed">{value.order.adress}</h5>
                                </div>
                                <div className="w-full justify-between items-center inline-flex gap-4">
                                    <h5 className="text-gray-500 text-sm font-normal leading-relaxed">Payment Method</h5>
                                    <h5 className="text-right text-gray-500 text-sm font-normal leading-relaxed">COD</h5>
                                </div>
                            </div>
                            <div className="w-full md:px-6 px-2 flex-col justify-start items-start gap-5 inline-flex">
                                <div className="w-full pb-6 border-b border-gray-200 flex-col justify-start items-start gap-6 flex">
                                    <div className="w-full justify-between items-start gap-6 inline-flex">
                                        <h5 className="text-gray-500 text-sm font-normal leading-relaxed">Subtotal</h5>
                                        <h5 className="text-right text-gray-900 text-sm font-semibold leading-relaxed">{value.subTotal}Rs</h5>
                                    </div>
                                    <div className="w-full justify-between items-start gap-6 inline-flex">
                                        <h5 className="text-gray-500 text-sm font-normal leading-relaxed">Shipping</h5>
                                        <h5 className="text-right text-gray-900 text-sm font-semibold leading-relaxed">{value.shipping}Rs</h5>
                                    </div>
                                </div>
                                <div className="w-full justify-between items-start gap-6 inline-flex">
                                    <h4 className="text-indigo-600 text-lg font-semibold leading-8">Total</h4>
                                    <h4 className="text-right text-indigo-600 text-lg font-semibold leading-8">{value.total}Rs</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>    
    )
 })
 }
                                            
</>
                                            
    
  )
}

export default User