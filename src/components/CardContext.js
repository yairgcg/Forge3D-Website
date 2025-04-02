import React, { createContext, useContext, useState, useEffect } from "react";

// Creamos el contexto del carrito
const CartContext = createContext();

// Hook personalizado para usar el carrito fácilmente en otros componentes
export const useCart = () => useContext(CartContext);

// Componente proveedor del carrito
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  // Guardar carrito en localStorage cuando se actualiza
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Agregar producto al carrito
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Remover producto del carrito
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Vaciar carrito
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CardContext;