import React, { useState } from "react";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router";

const Payment = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderData = {
      id: Date.now(), 
      cart,
      total: cartTotal,
      customer: {
        name: e.target.name.value,
        email: e.target.email.value,
        address: e.target.address.value,
        method: e.target.method.value,
      },
    };
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([...existingOrders, orderData]));

    clearCart();

    navigate("/order-success", { state: { order: orderData } });
  };

  if (cart.length === 0) {
    return (
      <div className="flex items-center justify-center h-[60vh] text-xl font-semibold text-gray-600">
        Your Cart is Empty 🛒
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 mt-16">
      <h1 className="text-3xl font-bold mb-6">Payment Page 💳</h1>

      <div className="space-y-4 mb-6">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between bg-white p-4 rounded-xl shadow">
            <span>{item.name} x {item.quantity}</span>
            <span>৳ {item.price * item.quantity}</span>
          </div>
        ))}
        <h2 className="text-2xl font-semibold mt-6">Total: ৳ {cartTotal}</h2>
      </div>

      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition cursor-pointer"
        >
          Confirm Payment 
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Payment Details 📝</h2>

          <input type="text" name="name" placeholder="Full Name" required className="w-full border p-3 rounded-lg" />
          <input type="email" name="email" placeholder="Email Address" required className="w-full border p-3 rounded-lg" />
          <input type="text" name="address" placeholder="Shipping Address" required className="w-full border p-3 rounded-lg" />
          <select name="method" required className="w-full border p-3 rounded-lg">
            <option value="">Select Payment Method</option>
            <option value="Bkash">Bkash</option>
            <option value="Nagad">Nagad</option>
            <option value="Card">Credit/Debit Card</option>
            <option value="Cash on Delivery">Cash on Delivery</option>
          </select>

          <button type="submit" className="w-full bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-700 transition cursor-pointer">
            Payment Now 💳
          </button>
        </form>
      )}
    </div>
  );
};

export default Payment;
