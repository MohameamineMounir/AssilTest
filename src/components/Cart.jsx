import { useContext } from "react";
import { CartContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  // Update quantity of an item
  const updateQuantity = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + amount) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove an item from the cart
  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    toast.info("تمت إزالة المنتج من السلة", { position: "top-right" });
  };

  // Calculate the total price of the cart
  const totalPrice = cartItems.reduce(
    (sum, item) =>
      item.currentPrice ? sum + item.quantity * item.currentPrice : sum,
    0
  );

  // Format cart items for sharing
  const formatCartMessage = () => {
    const formattedProducts = cartItems
      .map(
        (item) =>
          `• ${item.name}\n  الكمية: ${item.quantity} × السعر: ${
            item.currentPrice ? `${item.currentPrice} MAD` : "غير متوفر"
          }\n  الإجمالي: ${
            item.currentPrice
              ? `${item.quantity * item.currentPrice} MAD`
              : "السعر عند التواصل"
          }`
      )
      .join("\n\n");

    return `🛒 سلة مشترياتك:\n\n${formattedProducts}\n\n💵 الإجمالي: ${
      totalPrice ? `${totalPrice} MAD` : "غير متوفر"
    }`;
  };

  // Copy cart details to clipboard
  const copyToClipboard = () => {
    const message = formatCartMessage();
    navigator.clipboard.writeText(message).then(() => {
      toast.success("تم نسخ السلة إلى الحافظة!", { position: "top-right" });
    });
  };

  // Generate WhatsApp message URL
  const generateWhatsAppMessage = () => {
    const message = formatCartMessage();
    return `https://wa.me/+212698883477?text=${encodeURIComponent(message)}`;
  };

  // Handle empty cart
  if (cartItems.length === 0) {
    return (
      <div dir="rtl" className="container mx-auto px-4 py-8 text-center">
        <ToastContainer />
        <h2 className="text-2xl font-bold mb-4">سلتك فارغة</h2>
        <Link
          to="/dishes/alldishes"
          className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all"
        >
          تصفح المنتجات
        </Link>
      </div>
    );
  }

  return (
    <div dir="rtl" className="container mx-auto px-4 py-8">
      <ToastContainer />
      <h2 className="text-3xl font-bold mb-6 text-center">سلة المشتريات</h2>
      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-white p-4 rounded-lg shadow-lg"
          >
            <div>
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-gray-500">
                الكمية: {item.quantity}
                {item.currentPrice && ` × ${item.currentPrice} MAD`}
              </p>
              {item.currentPrice ? (
                <p className="text-red-500 font-bold">
                  الإجمالي: {item.quantity * item.currentPrice} MAD
                </p>
              ) : (
                <p className="text-yellow-600 font-medium">
                  السعر غير متوفر. للتواصل معنا عبر{" "}
                  <a
                    href="https://wa.me/+212698883477"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 font-bold hover:underline"
                  >
                    واتساب
                  </a>
                  .
                </p>
              )}
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-500 font-bold hover:underline ml-4"
            >
              إزالة
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <h3 className="text-2xl font-bold">
          السعر الإجمالي: {totalPrice || "غير متوفر"} MAD
        </h3>
        <div className="flex justify-center items-center mt-4 space-x-4">
          <button
            onClick={copyToClipboard}
            className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-all"
          >
            نسخ السلة
          </button>
          <a
            href={generateWhatsAppMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all"
          >
            واتساب
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
