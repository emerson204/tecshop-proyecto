import { productos } from "@/data/cardsProducts";
import Image from "next/image";

export default function ProductosCards() {
  return (
    <>
      {productos.map(({ id, nombre, precio, precioOriginal, carritoBtn }) => (
        <div key={id} className="flex flex-col w-[17rem] md:w-auto ">
          <div className="bg-[#f5f5f5] flex flex-col pt-10 rounded group">
            <div className="flex flex-col justify-between">
              <Image
                src={`/${id}.png`}
                alt="imagen de camara"
                width={130}
                height={110}
                className="mx-auto md:group-hover:-translate-y-5 md:transition-transform"
              />
              <button className="bg-black text-white mt-7 md:mt-3 py-3 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity w-[100%]">
                {carritoBtn}
              </button>
            </div>
          </div>
          <div className="py-3 mt-auto">
            <p className="font-medium mb-3">{nombre}</p>
            <p className="text-red-500 font-medium flex gap-5 text-md">
              S/{precio}
              <span className="text-gray-400 text-underline line-through">
                S/{precioOriginal}
              </span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
