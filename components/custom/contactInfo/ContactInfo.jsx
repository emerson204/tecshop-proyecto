import { Phone } from "lucide-react";

export default function ContactInfo({
  title,
  subTitle,
  customerPhone,
  supportEmail = " ",
  icon,
}) {
  return (
    <div>
      <div className="flex items-center gap-5 mb-5">
        <span className="bg-red-500 py-[.5rem] px-[.7rem] rounded-full">
          {icon}
        </span>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <p className="mb-4 text-[0.875rem]">{subTitle}</p>
      <p className="mb-4 text-[0.875rem]">{customerPhone}</p>
      <p className="text-[0.875rem]">{supportEmail}</p>
    </div>
  );
}
