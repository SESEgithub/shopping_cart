


import {useCart} from "../hooks/useCart.jsx";

export const CartCard = () => {
    const{cartItems,REMOVE_FROM_CART}=useCart()
    return (
        <>

            {cartItems.map((item) => (
                <section className="  h-32 max-sm:h-12 w-11/12 border-2 border-gray-200 m-auto   rounded mt-8" key={item.id}>
                    <section className="m-3 flex flex-row justify-between items-center">

                        <img className="h-24 max-sm:hidden" src={item.image} alt=""/>
                        <p className=" capitalize  ">{item.name}</p>
                        <p>$ <span>{item.price}</span></p>
                        <button className="bg-red-800 px-2 py-1  text-white rounded " onClick={()=>REMOVE_FROM_CART(item)}>Remove</button>

                    </section>
                </section>
            ))}

        </>
    )
}
