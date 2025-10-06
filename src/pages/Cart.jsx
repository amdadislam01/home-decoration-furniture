import React from "react";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router";

const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();
  const navigate = useNavigate();
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="flex items-center justify-center h-[60vh] text-xl font-semibold text-gray-600">
        Your Cart is Empty 🛒
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-10 mt-16">
      <h1 className="text-3xl font-bold mb-6">Your Cart 🛒</h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 bg-white shadow rounded-xl"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">৳ {item.price}</p>
              </div>
            </div>

            {/*  Quantity Control */}
            <div className="flex items-center gap-4 bg-gray-100 px-4 py-2 rounded-full shadow">
              <button
                onClick={() => decreaseQty(item.id)}
                className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 transition cursor-pointer"
              >
                -
              </button>

              <span className="text-lg font-semibold text-gray-800 min-w-[30px] text-center">
                {item.quantity}
              </span>

              <button
                onClick={() => increaseQty(item.id)}
                className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full hover:bg-green-600 transition cursor-pointer"
              >
                +
              </button>
            </div>

            {/*  Remove */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition cursor-pointer"
            >
              Remove ❌
            </button>
          </div>
        ))}
      </div>

      {/*  Total Price */}
      <div className="mt-10 bg-gray-100 p-6 rounded-xl shadow flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-xl font-bold">
          Total: <span className="text-green-600">৳ {totalPrice}</span>
        </h2>
        <button
          onClick={() => navigate("/payment")}
          className="mt-4 md:mt-0 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition cursor-pointer"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Cart;
