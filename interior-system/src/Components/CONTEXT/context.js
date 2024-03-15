import React, { createContext, useContext, useEffect, useState } from 'react';

// Create a Cart Context
const CartContext = createContext();

// Custom hook to use Cart Context
export const useCart = () => useContext(CartContext);

// Cart Provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  

  // Load cart items from localStorage on component mount
  useEffect(() => {
    try {
      const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
      if (storedCartItems && Array.isArray(storedCartItems)) {
        setCartItems(storedCartItems);
      }
    } catch (error) {
      console.error('Error loading cart items from localStorage:', error);
    }
  }, []);

  // Save cart items to localStorage whenever cartItems changes
  useEffect(() => {
    try {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } catch (error) {
      console.error('Error saving cart items to localStorage:', error);
    }
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider value={{ cartItems, cartCount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};