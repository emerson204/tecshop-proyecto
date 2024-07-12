import React from "react";
import Image from "next/image";
export default function Services({ image, title, subtitle, alt }) {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <Image src={image} width={55} height={55} alt={alt} />
        <div className="flex flex-col items-center gap-2">
          <p className="font-bold text-xl">{title}</p>
          <p className="text-sm">{subtitle}</p>
        </div>
      </div>
    </>
  );
}
