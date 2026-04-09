import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Añadir producto (si ya existe, sube cantidad)
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Quitar una unidad (si llega a 0 elimina)
  const removeFromCart = (productId) => {
  setCartItems((prev) => {
    const existing = prev.find((item) => String(item.id) === String(productId));
    if (existing && existing.quantity > 1) {
      return prev.map((item) =>
        String(item.id) === String(productId)
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    }
    return prev.filter((item) => String(item.id) !== String(productId));
  });
};

  // Eliminar producto completo
const deleteFromCart = (productId) => {
  setCartItems((prev) => prev.filter((item) => String(item.id) !== String(productId)));
};


  // Total de unidades (para el badge)
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Total en pesos
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      cartCount,
      cartTotal,
      addToCart,
      removeFromCart,
      deleteFromCart,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}