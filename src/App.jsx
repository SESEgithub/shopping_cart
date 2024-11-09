
import {Navbar} from "./components/Navbar.jsx";
import {CartList} from "./pages/CartList.jsx";
import {Home} from "./pages/Home.jsx";
import {Route, Routes} from "react-router-dom";

export default function App  ()  {
    return (
        <>
            <div className="xl:mx-36 2xl:mx-60">
               <Navbar></Navbar>
               <Routes>
                   <Route index element={<Home />} />
                   <Route path="/cart" element={<CartList />} />
               </Routes>
           </div>
        </>
    )
}
