import { createContext, useContext } from "react";
import { useState } from "react";

const initialCartState = [];

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (cartData) => {
    setCart((state) =>
      [...state, cartData]
    );
  };

  const clearCart = () => {
    setCart(initialCartState);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const cartState = useContext(CartContext);

  return cartState;
};
