import { useEffect, useState, useContext, createContext } from "react";
import type { ReactNode } from "react";

//define type of cart item
export type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

// get cart from localStorage (if exists)
function getCartFromStorage(): CartItem[] {
  const data = localStorage.getItem("cart");
  return data ? JSON.parse(data) : [];
}

// main logic of cart
function useCartLogic() {
  // state of cart
  const [cart, setCart] = useState<CartItem[]>(getCartFromStorage());

  // save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // add product to cart (or increase quantity if it exists)
  const addToCart = (item: Omit<CartItem, "quantity">, quantity: number = 1) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === item.id);
      if (exists) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + quantity } : p
        );
      }
      return [...prev, { ...item, quantity }];
    });
  };

  // remove product from cart
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // update quantity of a product in cart
  const updateQuantity = (id: number, quantity: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  // clear cart
  const clearCart = () => setCart([]);

  // calculate total price of cart
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return { cart, addToCart, removeFromCart, updateQuantity, clearCart, total };
}

// create context for cart
const CartContext = createContext<ReturnType<typeof useCartLogic> | undefined>(undefined);

// Provider for putting context in whole app
function CartProvider({ children }: { children: ReactNode }) {
  const value = useCartLogic();
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// main hook for use cart in components
function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}

export { CartProvider, useCart }; 