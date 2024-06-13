import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(i => i.id === item.id);
    if (existingItemIndex > -1) {
      const updatedCartItems = cartItems.map((i, index) =>
        index === existingItemIndex ? { ...i, quantity: i.quantity + item.quantity } : i
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
