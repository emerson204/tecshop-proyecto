'use client'

import Image from "next/image"
import { productos } from "@/data/cardsProducts"
import { useCart } from "@/app/context/cart";

export default function ProductoDetails( { params } ) {

    const producto = productos.find( producto => producto.id === params.productId );

    if ( !producto ) {
        return <div>Producto no encontrado</div>;
    }

    const { aumentarCantidad, disminuirCantidad, addToCart } = useCart();

    return (
        <>
            <div className="flex flex-col justify-center p-10 gap-10 md:flex-row md:max-h-[30%]">
                <div className="bg-[#F5F5F5] rounded md:max-w-[45%] md:flex md:items-center">
                    <Image src={`/${producto.id}.png`} width={600} height={400} alt={producto.id} className="p-5" />
                </div>
                <div className="flex flex-col gap-10 md:gap-40 md:max-w-[25%]">
                    <div className="flex flex-col gap-8">
                        <h1 className="text-3xl font-bold">{producto.nombre}</h1>
                        <p className="text-3xl font-semibold">${producto.precio}</p>
                        <p className="text-xl">{producto.descripcion}</p>
                        <hr className="border-2 border-[#afafaf]" />
                    </div>
                    <div className="flex justify-between">
                        <div className="flex">
                            <button className="rounded-tl-lg rounded-bl-lg border-2 border-[#afafaf] px-3 text-2xl" onClick={disminuirCantidad}>-</button>
                            <span className="w-16 border-t-2 border-b-2  border-[#afafaf]">{productos.cantidad}</span>
                            <button className="rounded-tr-lg rounded-br-lg bg-[#db4444] text-white px-3 text-2xl" onClick={aumentarCantidad}>+</button>
                        </div>

                        <button className="w-[50%] md:w-48 rounded-lg p-3 bg-[#db4444] text-white text-xl" onClick={addToCart}>Agregar Carrito</button>

                    </div>
                </div>
            </div>
        </>
    )
}
