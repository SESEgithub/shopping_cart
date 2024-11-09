
import {UseTitle} from "../hooks/useTitle";
import {CartCard} from "../components/CartCard.jsx";
import {useCart} from "../hooks/useCart.jsx";


export const CartList = () => {
    const{cartItems,totalPrice}=useCart()
        UseTitle("Cart");
    return (
        <>
            <h1 className={"text-center text-2xl mt-6 font-bold"}>Cart Items: <span>{cartItems.length}</span>/$<span>{totalPrice}</span></h1>
            <CartCard ></CartCard>

        </>
    )
}
