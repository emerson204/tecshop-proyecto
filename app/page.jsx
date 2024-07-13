"use client";

import HeadingFlashes from "@/components/custom/headingSection/HeadingFlashes";
import SliderHero from "@/components/custom/sliderHero/SliderHero";
import { productos } from "@/data/cardsProducts";
import Image from "next/image";
import ServicesGroup from "@/components/custom/services/ServicesGroup";
import SeparatorProducts from "@/components/custom/productsSlice/SeparatorProducts";
import Aos from "aos";
import { useEffect } from "react";

export default function Home() {
  const primeroProductos = productos.slice(0, 8);
  const segundoProductos = productos.slice(9, 17);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <SliderHero />
      <section className="mt-20 px-5 lg:px-0 overflow-hidden">
        <HeadingFlashes nombre="Today's" flashes="Flash Sales" />

        <SeparatorProducts separador={primeroProductos} />
      </section>
      <section className="bg-black mt-10 py-8 md:mb-18 md:py-16">
        <div className="max-w-[75rem] mx-auto text-white px-4 lg:px-0">
          <p className="text-[#00ff66]" data-aos="fade-right">
            Categories
          </p>
          <div className="grid md:grid-cols-2 items-center">
            <div className="mb-6 md:mb-0" data-aos="fade-right">
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
            <div className="mx-auto" data-aos="zoom-in">
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

      <section className="px-5 lg:px-0 overflow-hidden mt-20 ">
        <HeadingFlashes nombre="Our Products" flashes="Explore Our Products" />

        <SeparatorProducts separador={segundoProductos} />
      </section>

      <section className="my-10">
        <ServicesGroup />
      </section>
    </>
  );
}
