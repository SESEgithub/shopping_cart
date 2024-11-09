
import {useCart} from "../hooks/useCart.jsx";
import {useEffect, useState} from "react";
// eslint-disable-next-line react/prop-types
export const Card = ({product}) => {
      const{ADD_TO_CART ,REMOVE_FROM_CART , cartItems}=useCart();
     const[inCart,setInCart]=useState(false);
      useEffect(()=>{
          // eslint-disable-next-line react/prop-types
         const isInCart=cartItems.find((item)=> item.id === product.id ) ;
         if(isInCart){
             setInCart(true);
         }
         else {
             setInCart(false);
         }
      },[cartItems])

    return (
        <>

            {/* eslint-disable-next-line react/prop-types */}
                <section className="  h-96 w-80 border-2 border-gray-200 m-auto   rounded mt-12" key={product.id}>
                    <section className="m-2 mt-5" >
                        <section>
                            {/* eslint-disable-next-line react/prop-types */}
                            <img className="overflow-auto h-60 w-fit" src={product.image} alt=""/>
                        </section>
                        {/* eslint-disable-next-line react/prop-types */}
                        <p className=" capitalize  mt-5">{product.name}</p>
                        <section className=" mt-8 flex flex-row justify-between">
                            {/* eslint-disable-next-line react/prop-types */}
                            <p>$ <span>{product.price}</span></p>
                            {inCart ? <button className="bg-red-800 px-2 py-1 text-white rounded " onClick={() => REMOVE_FROM_CART(product)}>Remove</button>
                                : <button className="bg-blue-800 px-2 py-1 text-white rounded " onClick={() => ADD_TO_CART(product)}>Add To Cart</button>}
                        </section>
                    </section>
                </section>



        </>
                )
            }
