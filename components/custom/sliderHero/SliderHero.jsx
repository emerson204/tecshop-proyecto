"use client";

import Image from "next/image";
import Link from "next/link";
import { HiArrowSmallRight } from "react-icons/hi2";
import { sliderInfo } from "@/data/sliderInfo";

import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export default function SliderHero() {
  return (
    <div className="relative">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {sliderInfo.map(({ id, serie, heading }) => (
          <SwiperSlide key={id} className="bg-black py-[2rem] ">
            <div className="text-white grid grid-cols-2 mx-auto max-w-[75rem]">
              <div className="md:pt-4 lg:pt-16 pl-14 md:pl-20 lg:pl-0">
                <div className="flex items-center gap-1 md:gap-2 lg:gap-7 md:mb-5 mb-3">
                  <Image
                    src="/iconIphone.png"
                    alt="imagen de celular"
                    width={40}
                    height={49}
                    className="w-[1.5rem] md:w-[2rem] lg:w-[3rem]"
                  />

                  <p className="md:text-sm text-xs">{serie}</p>
                </div>
                <h2 className="text-lg md:text-4xl lg:text-6xl lg:max-w-[90%] font-semibold md:font-medium tracking-wide mb-5">
                  {heading}
                </h2>
                <button className="md:flex md:items-center md:gap-4 hidden ">
                  <Link href="/">Shop Now</Link>
                  <HiArrowSmallRight className="text-xl" />
                </button>
              </div>

              <Image
                src="/iphone.jpeg"
                alt="imagen de celular"
                width={541}
                height={350}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
