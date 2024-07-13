"use client";

import Image from "next/image";
import { useCart } from "@/app/context/cart";
import Link from "next/link";

export default function ProductosCards({ product, addToCart }) {
  const { id, nombre, precio, precioOriginal } = product;
  const { cart } = useCart();

  return (
    <>
      <div key={id} className="flex flex-col w-[17rem] md:w-auto gap-4">
        <div className="bg-[#f7f7f7] flex flex-col justify-between rounded group h-72 md:h-[68%] md:pt-5">
          <div className="flex flex-col justify-center h-72 pt-2">
            <Link href={`/product/${id}`}>
              <Image
                src={`/${id}.png`}
                alt="imagen de camara"
                width={160}
                height={110}
                className="mx-auto md:group-hover:-translate-y-4 md:transition-transform"
              />
            </Link>
          </div>
          <button
            className="bg-black text-white  py-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity w-[100%]"
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </button>
        </div>
        <div>
          <p className="font-medium mb-3">{nombre}</p>
          <p className="text-red-500 font-medium flex gap-5 text-md">
            S/{precio}
            <span className="text-gray-400 text-underline line-through">
              S/{precioOriginal}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
