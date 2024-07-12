"use client";

// /pages/checkout.js
import { useCart } from "@/app/context/cart";
import Link from "next/link";
import Image from "next/image";
import { HiArchiveBoxXMark } from "react-icons/hi2";

export default function Checkout() {
  const { cart, totalPagar, eliminarProducto } = useCart();

  return (
    <div className="max-w-[85rem] mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Productos */}
        <div className="flex-1 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-8">Tus Productos</h2>
          {cart.length === 0 ? (
            <p>Tu carrito está vacío</p>
          ) : (
            cart.map((product) => (
              <div
                key={product.id}
                className="flex justify-between mb-4 border-b py-10 "
              >
                <div className="flex gap-14">
                  <Image
                    src={`/${product.id}.png`}
                    alt={product.nombre}
                    width={110}
                    height={110}
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{product.nombre}</h3>
                    <p className="my-2 ">
                      Cantidad: <span>{product.cantidad}</span>
                    </p>
                    <p>
                      Precio: S/<span>{product.precio}</span>
                    </p>
                  </div>
                </div>
                <HiArchiveBoxXMark
                  className="text-2xl cursor-pointer  hover:text-red-500 transition duration-250"
                  onClick={() => eliminarProducto(product.id)}
                />
              </div>
            ))
          )}
        </div>

        {/* Resumen */}
        <div className="w-full lg:w-1/3 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Resumen de Compra</h2>
          <p className="flex justify-between mb-2">
            Total de Productos:{" "}
            <span>
              {cart.reduce((total, product) => total + product.cantidad, 0)}
            </span>
          </p>
          <p className="flex justify-between mb-2">
            Total a Pagar: <span>S/{totalPagar()}</span>
          </p>
          <Link
            href="/payment"
            className="block bg-black text-white text-center py-2 rounded mt-4"
          >
            Proceder al Pago
          </Link>
        </div>
      </div>
    </div>
  );
}
