import React, { useReducer} from "react";
import {CartReducer} from "../reducer/cartReducer.jsx";

const initialState = {
    cartItems: [],
    totalPrice: 0,
}
export  const CartContext = React.createContext(initialState);
// eslint-disable-next-line react/prop-types
export const CartProvider = ({children}) => {
    const[state, dispatch] = useReducer(CartReducer, initialState );

   const ADD_TO_CART=(item)=>{
       const updatedCartItems = state.cartItems.concat(item);
       UPDATE_TOTAL_PRICE(updatedCartItems);
       dispatch({
           type: "ADD_TO_CART",
           payload: {
             items:  updatedCartItems
           }
       })
   }

    const REMOVE_FROM_CART=(item)=>{
        const updatedCartItems = state.cartItems.filter(current => current.id !== item.id);
        UPDATE_TOTAL_PRICE(updatedCartItems);
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                items:  updatedCartItems
            }
        })
    }

    const UPDATE_TOTAL_PRICE=(items)=>{
        let total_Price = 0;
        items.forEach((item)=>{total_Price= total_Price+item.price})
        dispatch({
            type: "UPDATE_TOTAL_PRICE",
            payload: {
                total_Price:  total_Price
            }
        })
    }
    const value={
        totalPrice: state.totalPrice,
        cartItems: state.cartItems,
        ADD_TO_CART,
        REMOVE_FROM_CART
    };
return(
    <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
)
 }
