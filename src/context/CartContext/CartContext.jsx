import { createContext, useContext, useReducer, useState } from "react";
const CartContext=createContext(null)
export const useCartContext=()=>useContext(CartContext)

const reducer=(state,{type,payload})=>{

    switch(type){
        case 'ADD_TO_CART':
        const exist=state.find(item=>item.id==payload.id)
        if(exist){return state.map(item=>item.id===payload.id ?{...item,quantity:item.quantity+1}:item)}
        else return [...state,{...payload,quantity:1}]    
        case 'INCREAMENT':return state.map(item=>item.id===payload.id ?{...item,quantity:item.quantity+1}:item)
        case 'DECREAMENT':return state.map(item=>item.id===payload.id ?
            item.quantity>0?{...item,quantity:item.quantity-1}:{...item,quantity:0}
            :item)
            case 'REMOVE' :{return state.filter(item=>item.id!==payload.id )}
            

        // return [...state,payload]

default:return state
    }
}
export default function CartContextProvider({children}){

  const [cartItems,cartDispatch]=useReducer(reducer,[])

return(
    <CartContext.Provider value={{cartItems,cartDispatch}}>
{children}
    </CartContext.Provider>
)
}