import { TbShoppingCartDollar } from "react-icons/tb";
import {Link, NavLink} from "react-router-dom";
import {useCart} from "../hooks/useCart.jsx";
export const Navbar = () => {
    const {cartItems}=useCart()
    return (
        <>
        <div className=" flex flex-row justify-between h-16 items-center text-lg border-b border-b-gray-100 ">
            <Link to={"/"}>
                <div className={"ml-3 flex flex-row"}>
                    <TbShoppingCartDollar className={"text-3xl text-blue-500 "}/>
                    <h1 className={"ml-1"}>Shopping Cart</h1>
                </div>
            </Link>
            <div className={"max-sm:hidden   "}>
                <ul className={"flex flex-row "}>
                    <li><NavLink to={"/"} className={({isActive}) => isActive ? "bg-gray-100  px-2 rounded" :""}>Home</NavLink></li>
                <li className={"ml-6"}><NavLink  to="cart" className={({isActive})=>isActive ? "bg-gray-100  px-2 rounded":""}>Cart</NavLink></li>
            </ul></div>
            <Link to={"cart"}>
                <div className={"mr-6"}>Cart: <span>{cartItems.length}</span></div>
            </Link>
        </div>

        </>
    )
}
