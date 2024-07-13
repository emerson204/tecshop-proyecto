import Header from "@/components/custom/header/Header";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/cart";
import "aos/dist/aos.css";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/custom/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Skiller Tienda Online",
  description: "Tienda online que vende productos de tecnologia  ",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <CartProvider>
        <html lang="en">
          <body className={inter.className}>
            <Header />
            {children}
            <Footer />
          </body>
        </html>
      </CartProvider>
    </ClerkProvider>
  );
}
