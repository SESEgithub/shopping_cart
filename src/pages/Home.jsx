
import {UseTitle} from "../hooks/useTitle.jsx";
import {Card} from "../components/Card.jsx";


export const Home = () => {

    UseTitle("Home");
    const products=[{"id":1,"name":" lots of electronics equipments","price":56,"image":"/assets/product1.jpg"},
        {"id":2,"name":"  mouse,keyboard,and headphone","price":86,"image":"/assets/product2.jpg"},
        {"id":3,"name":" still-life-wireless-cyberpunk-headphones","price":34,"image":"/assets/product5.jpg"},
        {"id":4,"name":"  mouse, keyboard,and headphone","price":86,"image":"/assets/product2.jpg"},
        {"id":5,"name":" still-life-wireless-cyberpunk-headphones","price":34,"image":"/assets/product5.jpg"},
        {"id":6,"name":"  wired keyboard, mouse and head set","price":60,"image":"/assets/product6.jpg"}
        ]
    return (
        <>
            <div className=" flex flex-wrap  ">
                {products.map((product)=>(
                    <Card product={product} key={product.id}></Card>
                ))}

            </div>

        </>
    )
}
