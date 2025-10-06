import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    if (location.state?.order) {
      setOrder(location.state.order);
    } else {
      navigate("/"); // direct visit করলে home redirect
    }
  }, [location, navigate]);

  if (!order) return null;

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 mt-16">
      <h1 className="text-3xl font-bold text-green-600 mb-6">🎉 Order Placed Successfully!</h1>

      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="space-y-4">
        {order.cart.map((item) => (
          <div key={item.id} className="flex justify-between bg-white p-4 rounded-xl shadow">
            <span>{item.name} x {item.quantity}</span>
            <span>৳ {item.price * item.quantity}</span>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-6">Total Paid: ৳ {order.total}</h2>

      <div className="mt-8 p-4 bg-gray-100 rounded-xl">
        <h3 className="font-semibold">Customer Info:</h3>
        <p><span className="font-medium">Name:</span> {order.customer.name}</p>
        <p><span className="font-medium">Email:</span> {order.customer.email}</p>
        <p><span className="font-medium">Address:</span> {order.customer.address}</p>
        <p><span className="font-medium">Payment Method:</span> {order.customer.method}</p>
      </div>
    </div>
  );
};

export default OrderSuccess;
