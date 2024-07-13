"use client";

import { useCart } from "@/app/context/cart";
import ProductosCards from "@/components/custom/productosCard/ProductosCards";

export default function SeparatorProducts({ separador }) {
  const { cart, addToCart } = useCart();

  return (
    <div className=" overflow-x-scroll md:overflow-x-hidden">
      <div className="grid w-[70rem] gap-7 md:w-auto grid-cols-4 md:grid-cols-2 lg:grid-cols-4 max-w-[75rem] mx-auto md:gap-8 ">
        {separador.map((product) => (
          <ProductosCards
            key={product.id}
            product={product}
            cart={cart}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}
