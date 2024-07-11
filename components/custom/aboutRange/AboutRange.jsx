import Image from "next/image";

export default function AboutRange({ src, kills, description, className }) {
  return (
    <>
      <div
        className={`border rounded flex flex-col gap-2 items-center py-8 ${className}`}
      >
        <Image src={src} alt="icono dolar" width={55} height={55} />
        <h3 className="font-bold text-xl">{kills}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </>
  );
}
