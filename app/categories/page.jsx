"use client";

import SeparatorProducts from "@/components/custom/productsSlice/SeparatorProducts";
import { productos } from "@/data/cardsProducts";
import { Search } from "lucide-react";
import { useState } from "react";

export default function ProductosCategories() {
  const [filterPrice, setFilterPrice] = useState({
    minimoPrice: 0,
  });
  const [minPrice, setMinPrice] = useState(0);

  function handleChangeMiPrice(e) {
    const nuevoMinPrice = e.target.value;
    setMinPrice(nuevoMinPrice);

    setFilterPrice({
      minimoPrice: nuevoMinPrice,
    });
  }

  function filterProductos(productos) {
    return productos.filter((producto) => {
      return producto.precio >= filterPrice.minimoPrice;
    });
  }

  //Filtrado por search
  const [searchTerm, setSearchTerm] = useState("");

  const handleChangeSearch = (event) => {
    setSearchTerm(event);
  };

  const filteredItems = productos.filter((item) =>
    item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //Esto es para que las dos filtraciones funcionen
  const filteredProducts = filterProductos(filteredItems);

  return (
    <>
      <section className="px-3 lg:px-0">
        <div className="max-w-[75rem] mx-auto">
          <h1 className="text-3xl font-bold my-10">Technological products</h1>

          <div className="flex relative w-[100%]">
            <input
              type="text"
              className="rounded outline-none pl-4 py-4 md:pr-16 text-sm w-[100%] bg-gray-100  placeholder:text-slate-600"
              placeholder="What are you looking for?"
              onChange={(event) => handleChangeSearch(event.target.value)}
              value={searchTerm}
              // defaultValue={searchParams.get("query")?.toString()}
            />
            <span className="absolute right-5 top-[13px]">
              <Search className="w-[1.2rem]" />
            </span>
          </div>

          <div className="mt-5">
            <input
              type="range"
              id="price"
              min={0}
              max={3600}
              value={minPrice}
              step={200}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              onChange={handleChangeMiPrice}
            />

            <p className="mt-3 text-lg">
              Precio : <span className="font-semibold">S/{minPrice}</span>
            </p>
          </div>
        </div>
      </section>

      <section className="my-14 px-3 lg:px-0">
        <SeparatorProducts separador={filteredProducts} />
      </section>
    </>
  );
}
