import React, { createContext, useContext, useEffect, useState } from 'react';

// Create a Cart Context
const CartContext = createContext();
const WishlistContext = createContext();

// Custom hook to use Cart Context
export const useCart = () => useContext(CartContext);
export const useWishlist = () => useContext(WishlistContext);

// Cart Provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  // Load cart and wishlist items from localStorage on component mount
  useEffect(() => {
    try {
      const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
      const storedWishlistItems = JSON.parse(localStorage.getItem('wishlistItems'));
      
      if (storedCartItems && Array.isArray(storedCartItems)) {
        setCartItems(storedCartItems);
      }

      if (storedWishlistItems && Array.isArray(storedWishlistItems)) {
        setWishlistItems(storedWishlistItems);
      }
    } catch (error) {
      console.error('Error loading items from localStorage:', error);
    }
  }, []);

  // Save cart and wishlist items to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } catch (error) {
      console.error('Error saving cart items to localStorage:', error);
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    } catch (error) {
      console.error('Error saving wishlist items to localStorage:', error);
    }
  }, [wishlistItems]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  const addToWishlist = (item) => {
    setWishlistItems([...wishlistItems, item]);
  };

  const removeFromWishlist = (index) => {
    const updatedWishlistItems = wishlistItems.filter((_, i) => i !== index);
    setWishlistItems(updatedWishlistItems);
  };

  const cartCount = cartItems.length;
  const wishlistCount = wishlistItems.length;

  return (
    <CartContext.Provider value={{ cartItems, cartCount, addToCart, removeFromCart }}>
      <WishlistContext.Provider value={{ wishlistItems, wishlistCount, addToWishlist, removeFromWishlist }}>
        {children}
      </WishlistContext.Provider>
    </CartContext.Provider>
  );
};