"use client";

import ContactInfo from "@/components/custom/contactInfo/ContactInfo";
import ErrorsContact from "@/components/custom/errorsContact/ErrorsContact";
import { Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { BiErrorCircle } from "react-icons/bi";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const personaRegistrada = (data) => {
    console.log(data);

    reset();
  };

  return (
    <>
      <section className="max-w-[75rem] mx-auto my-8 lg:my-16 px-5 lg:px-0">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-7">
          <div className="shadow rounded py-16 px-8">
            <ContactInfo
              title="Call To Us"
              subTitle="We are available 24/7, 7 days a week."
              customerPhone="Phone: +51 995 458 584"
              icon={<Phone className="w-[1.2rem] text-white" />}
            />

            <hr className="my-8" />

            <ContactInfo
              title="Write To US"
              subTitle="Fill out our form and we will contact you within 24 hours."
              icon={<Mail className="w-[1.2rem] text-white" />}
              customerPhone="Emails: customer@exclusive.com"
              supportEmail="Emails: support@exclusive.com"
            />
          </div>
          <form
            action="post"
            className="shadow rounded py-16 px-8"
            noValidate
            onSubmit={handleSubmit(personaRegistrada)}
          >
            <div className="flex flex-col lg:flex-row gap-5 mb-5 w-[100%]">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  autoComplete="off"
                  className="bg-gray-100 py-3 px-3 rounded outline-none placeholder:text-gray-500 w-[100%]"
                  {...register("name", {
                    required: "El nombre es obligatorio",
                  })}
                />
                {errors.name && (
                  <ErrorsContact>
                    <BiErrorCircle />
                    {errors.name?.message}
                  </ErrorsContact>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  autoComplete="off"
                  className="bg-gray-100 py-3 px-3 rounded outline-none placeholder:text-gray-500 w-[100%]"
                  {...register("email", {
                    required: "El correo es obligatorio",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Correo no válido",
                    },
                  })}
                />

                {errors.email && (
                  <ErrorsContact>
                    <BiErrorCircle />
                    {errors.email?.message}
                  </ErrorsContact>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone *"
                  autoComplete="off"
                  className="bg-gray-100 py-3 px-3 rounded outline-none placeholder:text-gray-500 w-[100%]"
                  maxLength={9}
                  {...register("phone", {
                    required: "El teléfono es obligatorio",
                    minLength: {
                      value: 9,
                      message: "Ingrese 9 numeros ",
                    },
                  })}
                />
                {errors.phone && (
                  <ErrorsContact>
                    <BiErrorCircle />
                    {errors.phone?.message}
                  </ErrorsContact>
                )}
                {errors.minLength && (
                  <ErrorsContact>
                    <BiErrorCircle />
                    {errors.phone?.message}
                  </ErrorsContact>
                )}
              </div>
            </div>

            <div>
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                className=" bg-gray-100 py-3 px-3 rounded outline-none placeholder:text-gray-500 w-[100%] "
                rows={8}
                {...register("message", {
                  required: "El mensaje es obligatorio",
                })}
              />

              {errors.message && (
                <ErrorsContact>
                  <BiErrorCircle />
                  {errors.message?.message}
                </ErrorsContact>
              )}
            </div>

            <input
              type="submit"
              value="Send Message"
              className="bg-red-500 text-white px-9 py-4 rounded block ml-auto cursor-pointer mt-5 "
            />
          </form>
        </div>
      </section>
    </>
  );
}
