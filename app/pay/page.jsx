"use client";

import { useCart } from "@/app/context/cart";
import ErrorsContact from "@/components/custom/errorsContact/ErrorsContact";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { BiErrorCircle } from "react-icons/bi";

export default function Pay() {
  const { cart, totalPagar } = useCart();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (cart.length === 0) {
      router.push("/categories");
    }
  }, [cart, router]);

  function registerData(data) {
    console.log(data);
    reset();
  }

  return (
    <>
      <section className="py-8 mb-7 px-7">
        <div className="max-w-[75rem] mx-auto grid lg:grid-cols-2 gap-[4rem] lg:gap-[12rem]">
          <form action="post" onSubmit={handleSubmit(registerData)}>
            <h1 className="text-4xl font-medium mb-8">Billing Details</h1>
            <div className="mb-7">
              <label
                htmlFor="firstName"
                className="block text-gray-400 text-sm mb-2"
              >
                First Name*
              </label>
              <input
                type="text"
                name="firstName"
                className="bg-gray-100 p-3 rounded w-[100%] outline-none"
                autoComplete="off"
                {...register("firstName", {
                  required: "El campo nombre es obligatorio",
                })}
              />
              {errors.firstName && (
                <ErrorsContact>
                  <BiErrorCircle />
                  {errors.firstName?.message}
                </ErrorsContact>
              )}
            </div>
            <div className="mb-7">
              <label
                htmlFor="company"
                className="block text-gray-400 text-sm mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                name="company"
                className="bg-gray-100 p-3 rounded w-[100%] outline-none"
                autoComplete="off"
                {...register("company", {
                  required: "El campo company es obligatorio",
                })}
              />
              {errors.company && (
                <ErrorsContact>
                  <BiErrorCircle />
                  {errors.company?.message}
                </ErrorsContact>
              )}
            </div>
            <div className="mb-7">
              <label
                htmlFor="address"
                className="block text-gray-400 text-sm mb-2"
              >
                Street Address*
              </label>
              <input
                type="text"
                name="address"
                className="bg-gray-100 p-3 rounded w-[100%] outline-none"
                autoComplete="off"
                {...register("address", {
                  required: "El campo address es oblogatorio",
                })}
              />
              {errors.address && (
                <ErrorsContact>
                  <BiErrorCircle />
                  {errors.address?.message}
                </ErrorsContact>
              )}
            </div>
            <div className="mb-7">
              <label
                htmlFor="apartament"
                className="block text-gray-400 text-sm mb-2"
              >
                Apartment, floor, etc. (optional)
              </label>
              <input
                type="text"
                name="apartament"
                className="bg-gray-100 p-3 rounded w-[100%] outline-none"
                autoComplete="off"
                {...register("apartament", {
                  required: "El campo departament es obligatorio",
                })}
              />
              {errors.apartament && (
                <ErrorsContact>
                  <BiErrorCircle />
                  {errors.apartament?.message}
                </ErrorsContact>
              )}
            </div>
            <div className="mb-7">
              <label
                htmlFor="city"
                className="block text-gray-400 text-sm mb-2"
              >
                Town/City*
              </label>
              <input
                type="text"
                name="city"
                className="bg-gray-100 p-3 rounded w-[100%] outline-none"
                autoComplete="off"
                {...register("city", {
                  required: "El campo city es obligatorio",
                })}
              />
              {errors.city && (
                <ErrorsContact>
                  <BiErrorCircle />
                  {errors.city?.message}
                </ErrorsContact>
              )}
            </div>
            <div className="mb-7">
              <label
                htmlFor="phone"
                className="block text-gray-400 text-sm mb-2"
              >
                Phone Number*
              </label>
              <input
                type="tel"
                name="phone"
                className="bg-gray-100 p-3 rounded w-[100%] outline-none"
                autoComplete="off"
                maxLength={9}
                {...register("phone", {
                  required: "El campo teléfono es obligatorio",
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
            <div className="mb-7">
              <label
                htmlFor="email"
                className="block text-gray-400 text-sm mb-2"
              >
                Email Address*
              </label>
              <input
                type="email"
                name="email"
                className="bg-gray-100 p-3 rounded w-[100%] outline-none"
                autoComplete="off"
                {...register("email", {
                  required: "El campo correo es obligatorio",
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

            <input
              type="submit"
              value="Make payment"
              className="bg-red-500 text-white rounded py-3 px-4 cursor-pointer"
            />
          </form>

          <div>
            {cart.map((product) => (
              <>
                <div key={product.id} className=" mb-4 border-b py-5 ">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                      <Image
                        src={`/${product.id}.png`}
                        alt={product.nombre}
                        width={60}
                        height={60}
                      />
                      <h3 className="text-lg font-semibold">
                        {product.nombre}
                      </h3>
                    </div>

                    <p>S/{product.precio}</p>
                  </div>
                </div>
              </>
            ))}
            <p className="border-b-2 pb-4 pt-2 flex justify-between">
              Shipping: <span>Free</span>
            </p>
            <p className="flex justify-between gap-4 mb-2 py-5">
              Total to pay: <span>S/{totalPagar()}</span>
            </p>

            <div className="flex gap-3 items-center">
              <Image src="/visa.png" width={30} height={30} alt="Visa" />
              <Image src="/master.png" width={30} height={30} alt="Master" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
