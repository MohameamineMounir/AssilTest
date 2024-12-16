import { useContext } from "react";
import { ShopContext } from "../context/shop-context";

const Cart = () => {
  const { cartItems, removeFromCart, addToCart, getTotalCartAmount } =
    useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {totalAmount === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {Object.entries(cartItems).map(([id, quantity]) =>
            quantity > 0 ? (
              <div key={id} className="flex justify-between items-center mb-4">
                <span>Product {id}</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => removeFromCart(Number(id))}
                    className="px-2 py-1 bg-red-500 text-white rounded"
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={() => addToCart(Number(id))}
                    className="px-2 py-1 bg-green-500 text-white rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            ) : null
          )}
          <div className="mt-6 font-bold">Total: ${totalAmount.toFixed(2)}</div>
        </div>
      )}
    </div>
  );
};

export default Cart;
