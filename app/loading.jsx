import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <Image src="/cargando.gif" width={300} height={300} alt="gif de carga" />
    </div>
  );
}
