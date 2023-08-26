import React, { createContext, useContext, useState } from 'react';


const CartContext = createContext();

export const CartProvider = ({ children }) => {
  
  const [cart, setCart] = useState([]);

  const addToCart = (foodItem) => {
    const existingCartItemIndex = cart.findIndex(item => item.id === foodItem.id);
  
    if (existingCartItemIndex !== -1) {
      changeQuantity(foodItem.id, cart[existingCartItemIndex].quantity + 1);
    } else {
      setCart([...cart, { ...foodItem, quantity: 1 }]);
    }
    

  };
  
  
  const removeFromCart = (foodId) => {
    const updatedCart = cart.filter(item => item.id !== foodId);
    setCart(updatedCart);
  };



  const changeQuantity = (foodId, newQuantity) => {
    const updatedCart = cart.map(item =>
      item.id === foodId ? { ...item, quantity: newQuantity} : item
    );
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart,removeFromCart,changeQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
