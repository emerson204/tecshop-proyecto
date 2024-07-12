import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-black text-white px-10 pt-8 flex flex-col gap-10 pb-4 lg:px-16 lg:pt-14">
      <div className="flex flex-col gap-10 lg:flex-row lg:justify-around">
        <section className="flex flex-col gap-6 lg:w-[18%]">
          <p className="text-3xl">Exclusive</p>
          <p className="text-2xl">Subscribe</p>
          <div className="flex flex-col gap-4">
            <p className="mb-2">Get 10% off your first order</p>
            <div className="border-2 p-3 flex justify-between rounded w-[50%] md:w-[45%] lg:w-[100%]">
              <input
                className="bg-black text-white focus:outline-none lg:w-[85%]"
                type="email"
                placeholder="Enter your email"
              />
              <Image
                width={20}
                height={24}
                src="/footer/Vector.png"
                alt="vector"
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-6 w-[55%] lg:w-[15%]">
          <p className="text-2xl">Support</p>
          <div className="flex flex-col gap-4">
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
        </section>
        <section className="flex flex-col gap-6">
          <p className="text-2xl">Account</p>
          <div className="flex flex-col gap-4">
            <Link href="/account">
              <p>My Account</p>
            </Link>
            <Link href="/login">
              <p>Login / Register</p>
            </Link>
            <Link href="/cart">
              <p>Cart</p>
            </Link>
            <Link href="/wishlist">
              <p>Wishlist</p>
            </Link>
            <Link href="/shop">
              <p>Shop</p>
            </Link>
          </div>
        </section>
        <section className="flex flex-col gap-6">
          <p className="text-2xl">Quick Link</p>
          <div className="flex flex-col gap-4">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms Of Use</a>
            <a href="#">FAQ</a>
            <a href="#">Contact</a>
          </div>
        </section>
        <section className="flex flex-col gap-6">
          <p className="text-2xl">Dowloand App</p>
          <div className="flex flex-col gap-2">
            <p className="text-xs text-[#afafaf]">
              Save $3 with App New User Only
            </p>
            <div className="flex gap-2">
              <Image
                width={150}
                height={110}
                src="/footer/Qrcode.png"
                alt="qr"
              />
              <div className="flex flex-col gap-2">
                <Image
                  width={180}
                  height={30}
                  className="h-[50%]"
                  src="/footer/playStore.png"
                  alt="playStore"
                />
                <Image
                  width={180}
                  height={30}
                  className="h-[50%]"
                  src="/footer/appStore.png"
                  alt="appStore"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <Image
              width={20}
              height={20}
              src="/footer/Facebook.png"
              alt="facebook"
            />
            <Image
              width={20}
              height={20}
              src="/footer/Twitter.png"
              alt="twiter"
            />
            <Image
              width={20}
              height={20}
              src="/footer/instagram.png"
              alt="instagram"
            />
            <Image
              width={20}
              height={20}
              src="/footer/Linkedin.png"
              alt="linkendin"
            />
          </div>
        </section>
      </div>
      <p className="mx-auto text-[#3d3d3d]">
        &#169; Copyright Rimel 2022. All right reserved
      </p>
    </footer>
  );
};

export default Footer;
