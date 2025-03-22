// src/stores/cartStore.js

import { writable } from 'svelte/store';

// Define the Product type
export type Product = {
  name: string;
  description: string;
  price: number;
};

// Initialize the cart store
const storedCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') as string) : [];
export const cartStore = writable<Product[]>(storedCart);

cartStore.subscribe((value) => {
  localStorage.setItem('cart', JSON.stringify(value));
});

// Function to add a product to the cart
export const addToCart = (product: Product) => {
  cartStore.update(cart => {
    return [...cart, product];
  });
};

// Function to remove a product from the cart
export const removeFromCart = (product: Product) => {
  cartStore.update(cart => {
    return cart.filter(item => item.name !== product.name);
  });
};

// Function to clear the cart
export const clearCart = () => {
  cartStore.set([]);
};