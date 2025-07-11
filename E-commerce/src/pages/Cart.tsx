import React from "react";
import { useCart } from "../hooks/useCart";
import { useNavigate } from "react-router-dom";


const Cart: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, total } = useCart();
  const navigate = useNavigate();



  return (
    <div className="section-box px-1 sm:px-6">
      <button className="mb-4 text-blue-600 hover:text-pink-500 font-bold transition-colors" onClick={() => navigate("/")}> &larr; Back to Products </button>
      <h1 className="section-title">Cart</h1>
      {cart.length === 0 ? (
        <div className="text-center py-10">Your cart is empty.</div>
      ) : (
        <>
          {/* Desktop Table */}
          <div className="hidden sm:block overflow-x-auto w-full">
            <table className="w-full mb-6 text-xs sm:text-sm md:text-base">
              <thead>
                <tr className="table-head">
                  <th className="text-left py-2">Product</th>
                  <th className="text-left py-2">Price</th>
                  <th className="text-left py-2">Quantity</th>
                  <th className="text-left py-2">Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="table-row">
                    <td className="py-2 flex items-center gap-2 min-w-[120px]">
                      <img src={item.image} alt={item.title} className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded shadow" />
                      <span className="font-bold text-gray-700">{item.title}</span>
                    </td>
                    <td className="py-2 text-pink-600 font-bold min-w-[80px]">${item.price}</td>
                    <td className="py-2 min-w-[100px]">
                      <div className="flex items-center gap-2">
                        <button
                          className="px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >-</button>
                        <span className="font-bold">{item.quantity}</span>
                        <button
                          className="px-2 py-1 bg-pink-100 text-pink-700 rounded hover:bg-pink-200 transition-colors"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >+</button>
                      </div>
                    </td>
                    <td className="py-2 font-bold min-w-[80px]">${(item.price * item.quantity).toFixed(2)}</td>
                    <td className="py-2 min-w-[80px]">
                      <button
                        className="text-red-500 hover:underline hover:text-red-700 font-bold transition-colors"
                        onClick={() => removeFromCart(item.id)}
                      >Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Mobile Cards */}
          <div className="flex flex-col gap-4 sm:hidden">
            {cart.map((item) => (
              <div key={item.id} className="card-box flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-contain rounded shadow" />
                  <div className="flex-1">
                    <div className="font-bold text-gray-700 text-base mb-1">{item.title}</div>
                    <div className="text-pink-600 font-bold text-sm">${item.price}</div>
                  </div>
                  <button
                    className="text-red-500 hover:underline hover:text-red-700 font-bold transition-colors text-xs"
                    onClick={() => removeFromCart(item.id)}
                  >Remove</button>
                </div>
                <div className="flex items-center gap-2 justify-between">
                  <span className="text-xs">Quantity:</span>
                  <div className="flex items-center gap-2">
                    <button
                      className="px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >-</button>
                    <span className="font-bold">{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-pink-100 text-pink-700 rounded hover:bg-pink-200 transition-colors"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >+</button>
                  </div>
                  <span className="font-bold text-blue-700 text-sm">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4 sm:gap-0 mt-4">
            <span className="font-bold text-lg sm:text-xl text-blue-700">Total: ${total.toFixed(2)}</span>
            <button
              className="gradient-btn w-full sm:w-auto text-base sm:text-lg"
              onClick={() => navigate("/finalize")}
            >
              Finalize Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart; 