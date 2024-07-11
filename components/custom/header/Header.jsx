// Header.js
"use client";

import { navegacion } from "@/data/nav";
import { Menu, ShoppingCart, Search } from "lucide-react";
import {
  HiOutlineXMark,
  HiArchiveBoxXMark,
  HiOutlinePlusSmall,
  HiOutlineMinusSmall,
} from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/app/context/cart";

export default function Header() {
  const [cartVisible, setCartVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const {
    cart,
    eliminarProducto,
    aumentarCantidad,
    disminuirCantidad,
    vaciarCarrito,
  } = useCart();

  const totalPagar = () =>
    cart.reduce(
      (total, product) => total + product.cantidad * product.precio,
      0
    );

  return (
    <>
      <header className="p-3 md:py-5 border-b-[1px] border-gray-300">
        <div className="max-w-[85rem] mx-auto flex justify-between items-center gap-3">
          <Link href="/" className="font-bold text-2xl">
            TEC<span className="text-red-500">SHOP</span>
          </Link>

          <nav
            className={`absolute right-8 top-12 md:relative md:top-0 md:right-0 z-20 ${
              menuVisible
                ? "opacity-100"
                : "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto"
            }`}
          >
            <div className="p-5 w-[12rem] md:w-auto rounded bg-gray-500 bg-opacity-70 md:bg-transparent md:p-0">
              <ul className="flex flex-col gap-4 md:flex-row md:gap-8 lg:gap-14">
                {navegacion.map(({ id, title, ruta, icono }) => (
                  <li key={id} className="md:text-black text-white">
                    <Link href={ruta} className="flex items-center gap-3">
                      <span className="md:hidden">{icono}</span>
                      <p>{title}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="flex gap-2 items-center md:gap-5">
            <div className="flex relative w-[100%]">
              <input
                type="text"
                className="rounded outline-none px-2 pr-5 py-[7px] md:pr-16 text-xs w-[100%] bg-gray-100 placeholder:text-slate-600"
                placeholder="What are you looking for?"
              />
              <span className="absolute right-2 top-[2px]">
                <Search className="w-[1rem]" />
              </span>
            </div>

            <IoCartOutline
              className="text-3xl cursor-pointer"
              onClick={() => setCartVisible(!cartVisible)}
            />
            <Menu
              className="md:hidden w-[2rem]"
              onClick={() => setMenuVisible(!menuVisible)}
            />

            <div
              className={`fixed bg-[rgba(0,0,0,0.5)] inset-0 z-20 transition-opacity duration-300 ${
                cartVisible ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="absolute pt-8 bg-white bottom-0 top-0 right-0 w-[100%] md:w-[20rem] lg:w-[24rem] px-6 overflow-y-scroll pb-8">
                <div className="flex justify-end">
                  <HiOutlineXMark
                    className="text-3xl cursor-pointer"
                    onClick={() => setCartVisible(false)}
                  />
                </div>

                {cart.length === 0 ? (
                  <p className="bg-black text-white py-4 text-center mt-10 rounded">
                    El carrito esta vacio
                  </p>
                ) : (
                  <div>
                    {cart.map((product) => (
                      <div
                        className="shadow px-3 pb-3 pt-2 rounded-md mt-5"
                        key={product.id}
                      >
                        <div className="flex mt-10 justify-between relative">
                          <div className="flex items-center gap-3 mb-4 ">
                            <Image
                              src={`/${product.id}.png`}
                              alt={product.nombre}
                              width={70}
                              height={70}
                            />

                            <p className="text-sm">{product.nombre}</p>
                          </div>
                          <HiArchiveBoxXMark
                            className="text-2xl cursor-pointer absolute -top-9 right-0 hover:text-red-500 transition duration-250"
                            onClick={() => eliminarProducto(product.id)}
                          />
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="flex gap-4">
                            <button
                              className="text-lg"
                              onClick={() => disminuirCantidad(product.id)}
                            >
                              <HiOutlineMinusSmall />
                            </button>

                            <span className="text-[1rem]">
                              {product.cantidad}
                            </span>
                            <button
                              className="text-lg"
                              onClick={() => aumentarCantidad(product.id)}
                            >
                              <HiOutlinePlusSmall />
                            </button>
                          </div>

                          <p className="text-[1rem] font-medium">
                            S/{product.precio}
                          </p>
                        </div>
                      </div>
                    ))}
                    <div>
                      <p className="my-8 font-medium flex justify-between text-[1rem]">
                        Total a pagar :
                        <span className="font-bold text-[1rem]">
                          S/{totalPagar()}
                        </span>
                      </p>
                    </div>

                    <button
                      className="bg-red-600 py-3 text-center text-white font-bold rounded  w-[100%]"
                      onClick={vaciarCarrito}
                    >
                      Vaciar Carrito
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
