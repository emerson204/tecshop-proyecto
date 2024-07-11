import { Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function AboutDirectiva({ src, nombre, cargo, className }) {
  return (
    <div>
      <div className="bg-gray-200 flex justify-center pt-14">
        <Image
          src={src}
          alt="imagen de perfil"
          width={140}
          height={140}
          className={className}
        />
      </div>
      <div className="py-5">
        <h4 className="text-3xl font-semibold ">{nombre}</h4>
        <p className="my-2">{cargo}</p>
        <div className="flex gap-4">
          <Twitter className="w-[1rem]" />
          <Instagram className="w-[1rem]" />
          <Linkedin className="w-[1rem]" />
        </div>
      </div>
    </div>
  );
}
