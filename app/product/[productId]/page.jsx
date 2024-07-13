"use client";

import Image from "next/image";
import { productos } from "@/data/cardsProducts";
import { useCart } from "@/app/context/cart";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function ProductoDetails({ params }) {
  const producto = productos.find(
    (producto) => producto.id === params.productId
  );

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  const { addToCart } = useCart();

  return (
    <>
      <div className="max-w-[75rem] mx-auto mt-5">
        <Link
          href="/categories"
          className="flex items-center gap-3 max-w-[35%] hover:scale-105 transition "
        >
          <MoveLeft />
          Back
        </Link>
      </div>
      <div className="flex flex-col justify-center px-10 py-5 mb-9 gap-10 md:flex-row md:max-h-[30%]">
        <div className="bg-[#F5F5F5] rounded md:max-w-[45%] md:flex md:items-center">
          <Image
            src={`/${producto.id}.png`}
            width={450}
            height={400}
            alt={producto.id}
            className="p-5"
          />
        </div>
        <div className="flex flex-col gap-10 md:gap-40 md:max-w-[25%]">
          <div className="flex flex-col gap-8">
            <h1 className="text-3xl font-semibold">{producto.nombre}</h1>
            <p className="text-xl font-semibold">
              Precio : S/{producto.precio}
            </p>
            <p>{producto.descripcion}</p>
            <hr className="border-1 border-[#afafaf]" />
          </div>
          <div className="flex justify-between">
            <button
              className="w-[50%] md:w-48 rounded p-3 bg-[#db4444] text-white "
              onClick={addToCart}
            >
              Agregar Carrito
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
