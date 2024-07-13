"use client";

import AboutRange from "@/components/custom/aboutRange/AboutRange";
import Image from "next/image";

import SliderDirectiva from "@/components/custom/sliderDirectiva/SliderDirectiva";
import AcordionAbout from "@/components/custom/acordionAbout/AcordionAbout";
import Footer from "@/components/custom/footer/Footer";

import Aos from "aos";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <section className="mt-6 px-6 md:px-0">
        <div className="flex justify-between items-center overflow-x-hidden">
          <div className="md:ml-20" data-aos="fade-right">
            <h2 className="font-bold text-5xl tracking-wide my-6 md:my-10">
              Our Story
            </h2>
            <div className="md:max-w-[90%]">
              <p className="md:mb-4 leading-7">
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.
              </p>
              <p className="leading-7 md:block hidden">
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>
          </div>

          <div className=" md:block hidden" data-aos="fade-left">
            <Image
              src="/about-compras.png"
              alt="Imagen de dos personas con bolsas de compras"
              width={900}
              height={900}
              className="w-[130rem]"
            />
          </div>
        </div>
      </section>

      <section className="my-16  md:my-24 px-6">
        <div className="max-w-[75rem] mx-auto grid gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-8">
          <AboutRange
            src="/about-icon-money.png"
            kills="10.5K"
            description="Sallers active our site"
          />

          <AboutRange
            src="/about-icon-dolar.png"
            kills="33K"
            description="Sallers active our site"
            className="bg-red-500 text-white"
          />

          <AboutRange
            src="/about-icon-cartera.png"
            kills="10.5K"
            description="Sallers active our site"
          />

          <AboutRange
            src="/about-icon-tienda.png"
            kills="10.5K"
            description="Sallers active our site"
          />
        </div>
      </section>

      <section>
        <div className="max-w-[75rem] mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <SliderDirectiva />

            <div className="md:block hidden" data-aos="fade-left">
              <h3 className="font-bold text-3xl mb-4 ">Directive</h3>
              <p className="leading-7">
                The Board of Directors is a fundamental component of any
                organization, providing crucial leadership and governance. This
                body is composed of individuals with diverse professional
                backgrounds and expertise, ensuring a comprehensive and
                well-rounded approach to organizational oversight. The primary
                role of the Board of Directors is to establish the strategic
                direction of the organization. This involves setting long-term
                goals, formulating policies, and ensuring that the organization
                adheres to its mission and values.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[75rem] mx-auto my-10 md:mb-16 px-4 lg:px-0">
        <h2 className="text-3xl font-bold mb-5">Preguntas Frecuentes</h2>

        <AcordionAbout />
      </section>
    </>
  );
}
