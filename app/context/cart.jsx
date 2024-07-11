// CartProvider.js
"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

//Creamos el context
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const iniciarCart = () => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [cart, setCart] = useState(iniciarCart);

  const addToCart = (product) => {
    const existeProducto = cart.findIndex(
      (producto) => producto.id === product.id
    );

    if (existeProducto >= 0) {
      if (cart[existeProducto].cantidad >= 7) return;
      const copiaCarrito = [...cart];
      copiaCarrito[existeProducto].cantidad++;
      setCart(copiaCarrito);
    } else {
      product.cantidad = 1;
      setCart([...cart, product]);
    }
  };

  const eliminarProducto = (id) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  const aumentarCantidad = (id) => {
    const actualizarCantidad = cart.map((product) => {
      if (product.id === id && product.cantidad < 7) {
        return {
          ...product,
          cantidad: product.cantidad + 1,
        };
      }
      return product;
    });

    setCart(actualizarCantidad);
  };

  const disminuirCantidad = (id) => {
    const actualizarCantidad = cart.map((product) => {
      if (product.id === id && product.cantidad > 1) {
        return {
          ...product,
          cantidad: product.cantidad - 1,
        };
      }
      return product;
    });

    setCart(actualizarCantidad);
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        eliminarProducto,
        aumentarCantidad,
        disminuirCantidad,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
