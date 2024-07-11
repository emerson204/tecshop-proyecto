import Image from "next/image"
import { productos } from "@/data/cardsProducts"

export default function ProductoDetails({ params }){

    const producto = productos.find(producto => producto.id === params.productId );

    if (!producto) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <>
            <div className="flex flex-col items-center p-5">
                <div className="bg-[#F5F5F5] rounded ">
                    <Image src={`/${producto.id}.png`} width={380} height={380} alt={producto.id} className="p-10"/>
                </div>
                <div>
                    <h1>{producto.nombre}</h1>
                    <p>Precio: ${producto.precio}</p>
                    <p>{producto.descripcion}</p>
                </div>
            </div>
        </>
    )
}