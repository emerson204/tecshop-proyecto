"use client";

// /pages/checkout.js
import { useCart } from "@/app/context/cart";
import Link from "next/link";
import Image from "next/image";
import { HiArchiveBoxXMark } from "react-icons/hi2";

export default function Checkout() {
  const { cart, totalPagar, eliminarProducto } = useCart();

  return (
    <section className="max-w-[85rem] mx-auto p-6 mt-6 mb-10">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Productos */}
        <div className="flex-1 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-8">Your Products</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
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
                      Amount: <span>{product.cantidad}</span>
                    </p>
                    <p>
                      Price: S/<span>{product.precio}</span>
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
          <h2 className="text-xl font-semibold mb-4">Purchase Summary</h2>
          <p className="flex justify-between mb-2">
            Total Products:
            <span>
              {cart.reduce((total, product) => total + product.cantidad, 0)}
            </span>
          </p>
          <p className="flex justify-between mb-2">
            Total to pay: <span>S/{totalPagar()}</span>
          </p>
          <Link
            href="/pay"
            className="block bg-black text-white text-center py-3 rounded mt-4"
          >
            Proceed to Payment
          </Link>
        </div>
      </div>
    </section>
  );
}
