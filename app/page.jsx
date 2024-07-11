"use client";

import HeadingFlashes from "@/components/custom/headingSection/HeadingFlashes";
import ProductosCards from "@/components/custom/productosCard/ProductosCards";
import SliderHero from "@/components/custom/sliderHero/SliderHero";
import ServicesGroup from "@/components/custom/services/servicesGroup";
import { productos } from "@/data/cardsProducts";
import Image from "next/image";
import { useCart } from "./context/cart";

export default function Home() {
  const { cart, addToCart } = useCart();
  return (
    <>
      <SliderHero />
      <section className="mt-20 px-5 lg:px-0 overflow-hidden">
        <HeadingFlashes nombre="Today's" flashes="Flash Sales" />

        <div className=" overflow-x-scroll md:overflow-x-hidden">
          <div className="grid w-[70rem] gap-7 md:w-auto grid-cols-4 md:grid-cols-2 lg:grid-cols-4 max-w-[75rem] mx-auto md:gap-8 ">
            {productos.map((product) => (
              <ProductosCards
                key={product.id}
                product={product}
                cart={cart}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-black mt-10 py-8 md:py-16">
        <div className="max-w-[75rem] mx-auto text-white px-4 lg:px-0">
          <p className="text-[#00ff66]">Categories</p>
          <div className="grid md:grid-cols-2 items-center ">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl md:text-5xl font-bold max-w-[80%] my-4 md:my-7">
                Enhance Your Music Experience
              </h2>
              <p className="text-md max-w-[80%]">
                Feel free to customize it further to fit the specific style and
                branding of your virtual store!
              </p>
              <button className="bg-[#00ff66] my-5 py-3 px-8 rounded block">
                Buy Now
              </button>
            </div>
            <div className="mx-auto">
              <Image
                src="/buffer.png"
                alt="buffer"
                width={600}
                height={300}
                className="w-[20rem] md:w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <ServicesGroup />
      </section>
    </>
  );
}
