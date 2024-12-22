// import { createContext, useState } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems((prevItems) => {
//       const itemIndex = prevItems.findIndex((item) => item.id === product.id);
//       if (itemIndex !== -1) {
//         const updatedItems = [...prevItems];
//         updatedItems[itemIndex].quantity += 1;
//         return updatedItems;
//       }
//       return [...prevItems, { ...product, quantity: 1 }];
//     });
//   };

//   const getTotalQuantity = () => {
//     return cartItems.reduce((total, item) => total + item.quantity, 0);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, getTotalQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.id === product.id);
      if (itemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += 1;
        return updatedItems;
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, addToCart, getTotalQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
