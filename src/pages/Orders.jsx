import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // 🔹 Safe read from localStorage
    const savedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(savedOrders);
  }, []);

  if (!orders || orders.length === 0) {
    return (
      <div className="flex items-center justify-center h-[60vh] text-xl font-semibold text-gray-600">
        You have no orders yet 🛒
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 mt-16">
      <h1 className="text-3xl font-bold mb-6">My Orders 🛍️</h1>

      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="border p-4 rounded-xl shadow">
            <h2 className="font-semibold mb-2">Order ID: {order.id}</h2>
            {order.cart?.map((item) => (
              <div key={item.id} className="flex justify-between mb-1">
                <span>{item.name} x {item.quantity}</span>
                <span>৳ {item.price * item.quantity}</span>
              </div>
            ))}
            <h3 className="font-bold mt-2">Total Paid: ৳ {order.total}</h3>
            <p className="mt-2"><span className="font-medium">Payment Method:</span> {order.customer.method}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
