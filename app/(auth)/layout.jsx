import Footer from "@/components/custom/footer/Footer";
import Image from "next/image";
import React from "react";

export default function AuthLayout({ children }) {
  return (
    <>
      <div className="grid grid-cols-[1fr_1fr] mt-10 mb-28">
        <div>
          <div className="w-[100%]">
            <Image
              width={805}
              height={701}
              className="max-sm:hidden md:w-[100%]"
              src="/login/login.png"
              alt="login"
            />
          </div>
        </div>
        <div className="bg-slate-50 flex flex-col items-center pt-8">
          <h1 className="text-4xl my-4 font-bold">
            TEC<span className="text-red-500">SHOP</span>
          </h1>
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
