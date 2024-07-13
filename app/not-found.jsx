import { MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <>
      <section className="h-[91vh] flex justify-center items-center">
        <div className="px-3">
          <Image
            src="/not404.png"
            width={500}
            height={500}
            alt="not found 404"
          />

          <h1 className="text-5xl md:text-6xl font-extrabold text-center mt-5">
            Oops!
          </h1>
          <p className="text-base md:text-xl text-center font-semibold text-gray-600 my-4">
            We couldn't find the page you were looking for
          </p>

          <Link
            href="/"
            className="flex items-center justify-center gap-3 bg-black text-white max-w-[35%] md:max-w-[27%] py-3  text-sm rounded-full mx-auto"
          >
            <MoveLeft />
            Go home
          </Link>
        </div>
      </section>
    </>
  );
}
